try
{
	(function(w, d)
	{
		zaraz.debug = (pE = "") =>
		{
			document.cookie = `zarazDebug=${pE}; path=/`;
			location.reload()
		};
		window.zaraz._al = function(oh, oi, oj)
		{
			w.zaraz.listeners.push(
			{
				item: oh,
				type: oi,
				callback: oj
			});
			oh.addEventListener(oi, oj)
		};
		zaraz.preview = (ok = "") =>
		{
			document.cookie = `zarazPreview=${ok}; path=/`;
			location.reload()
		};
		zaraz.i = function(pH)
		{
			const pI = d.createElement("div");
			pI.innerHTML = unescape(pH);
			const pJ = pI.querySelectorAll("script"),
				pK = d.querySelector("script[nonce]"),
				pL = pK ? .nonce || pK ? .getAttribute("nonce");
			for (let pM = 0; pM < pJ.length; pM++)
			{
				const pN = d.createElement("script");
				pL && (pN.nonce = pL);
				pJ[pM].innerHTML && (pN.innerHTML = pJ[pM].innerHTML);
				for (const pO of pJ[pM].attributes) pN.setAttribute(pO.name, pO.value);
				d.head.appendChild(pN);
				pJ[pM].remove()
			}
			d.body.appendChild(pI)
		};
		zaraz.f = async function(nX, nY)
		{
			const nZ = {
				credentials: "include",
				keepalive: !0,
				mode: "no-cors"
			};
			if (nY)
			{
				nZ.method = "POST";
				nZ.body = new URLSearchParams(nY);
				nZ.headers = {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
			return await fetch(nX, nZ)
		};
		window.zaraz._p = async mP => new Promise((mQ =>
		{
			if (mP)
			{
				mP.e && mP.e.forEach((mR =>
				{
					try
					{
						const mS = d.querySelector("script[nonce]"),
							mT = mS ? .nonce || mS ? .getAttribute("nonce"),
							mU = d.createElement("script");
						mT && (mU.nonce = mT);
						mU.innerHTML = mR;
						mU.onload = () =>
						{
							d.head.removeChild(mU)
						};
						d.head.appendChild(mU)
					}
					catch (mV)
					{
						console.error(`Error executing script: ${mR}\n`, mV)
					}
				}));
				Promise.allSettled((mP.f || []).map((mW => fetch(mW[0], mW[1]))))
			}
			mQ()
		}));
		zaraz.pageVariables = {};
		zaraz.__zcl = zaraz.__zcl ||
		{};
		zaraz.track = async function(oJ, oK, oL)
		{
			return new Promise(((oM, oN) =>
			{
				const oO = {
					name: oJ,
					data:
					{}
				};
				if (oK ? .__zarazClientEvent) Object.keys(localStorage).filter((oQ => oQ.startsWith("_zaraz_google_consent_"))).forEach((oP => oO.data[oP] = localStorage.getItem(oP)));
				else
				{
					for (const oR of[localStorage, sessionStorage]) Object.keys(oR ||
					{}).filter((oT => oT.startsWith("_zaraz_"))).forEach((oS =>
					{
						try
						{
							oO.data[oS.slice(7)] = JSON.parse(oR.getItem(oS))
						}
						catch
						{
							oO.data[oS.slice(7)] = oR.getItem(oS)
						}
					}));
					Object.keys(zaraz.pageVariables).forEach((oU => oO.data[oU] = JSON.parse(zaraz.pageVariables[oU])))
				}
				Object.keys(zaraz.__zcl).forEach((oV => oO.data[`__zcl_${oV}`] = zaraz.__zcl[oV]));
				oO.data.__zarazMCListeners = zaraz.__zarazMCListeners;
				//
				oO.data = {...oO.data,
					...oK
				};
				oO.zarazData = zarazData;
				fetch("/cdn-cgi/zaraz/t",
				{
					credentials: "include",
					keepalive: !0,
					method: "POST",
					headers:
					{
						"Content-Type": "application/json"
					},
					body: JSON.stringify(oO)
				}).catch((() =>
				{
					//
					return fetch("/cdn-cgi/zaraz/t",
					{
						credentials: "include",
						method: "POST",
						headers:
						{
							"Content-Type": "application/json"
						},
						body: JSON.stringify(oO)
					})
				})).then((function(oX)
				{
					zarazData._let = (new Date).getTime();
					oX.ok || oN();
					return 204 !== oX.status && oX.json()
				})).then((async oW =>
				{
					await zaraz._p(oW);
					"function" == typeof oL && oL()
				})).finally((() => oM()))
			}))
		};
		zaraz.set = function(oY, oZ, o$)
		{
			try
			{
				oZ = JSON.stringify(oZ)
			}
			catch (pa)
			{
				return
			}
			prefixedKey = "_zaraz_" + oY;
			sessionStorage && sessionStorage.removeItem(prefixedKey);
			localStorage && localStorage.removeItem(prefixedKey);
			delete zaraz.pageVariables[oY];
			if (void 0 !== oZ)
			{
				o$ && "session" == o$.scope ? sessionStorage && sessionStorage.setItem(prefixedKey, oZ) : o$ && "page" == o$.scope ? zaraz.pageVariables[oY] = oZ : localStorage && localStorage.setItem(prefixedKey, oZ);
				zaraz.__watchVar = {
					key: oY,
					value: oZ
				}
			}
		};
		for (const
			{
				m: pb,
				a: pc
			}
			of zarazData.q.filter(((
			{
				m: pd
			}) => ["debug", "set"].includes(pd)))) zaraz[pb](...pc);
		for (const
			{
				m: pe,
				a: pf
			}
			of zaraz.q) zaraz[pe](...pf);
		delete zaraz.q;
		delete zarazData.q;
		zaraz.spaPageview = () =>
		{
			zarazData.l = d.location.href;
			zarazData.t = d.title;
			zaraz.pageVariables = {};
			zaraz.__zarazMCListeners = {};
			zaraz.track("__zarazSPA")
		};
		zaraz.fulfilTrigger = function(pg, ph, pi, pj)
		{
			zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
			zaraz.__zarazTriggerMap[pg] || (zaraz.__zarazTriggerMap[pg] = "");
			zaraz.__zarazTriggerMap[pg] += "*" + ph + "*";
			zaraz.track("__zarazEmpty",
			{...pi,
				__zarazClientTriggers: zaraz.__zarazTriggerMap[pg]
			}, pj)
		};
		zaraz._processDataLayer = oa =>
		{
			for (const ob of Object.entries(oa)) zaraz.set(ob[0], ob[1],
			{
				scope: "page"
			});
			if (oa.event)
			{
				if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(oa.event)) return;
				let oc = {};
				for (let od of dataLayer.slice(0, dataLayer.indexOf(oa) + 1)) oc = {...oc,
					...od
				};
				delete oc.event;
				oa.event.startsWith("gtm.") || zaraz.track(oa.event, oc)
			}
		};
		window.dataLayer = w.dataLayer || [];
		const n$ = w.dataLayer.push;
		Object.defineProperty(w.dataLayer, "push",
		{
			configurable: !0,
			enumerable: !1,
			writable: !0,
			value: function(...oe)
			{
				let of = n$.apply(this, oe);
				zaraz._processDataLayer(oe[0]);
				return of
			}
		});
		dataLayer.forEach((og => zaraz._processDataLayer(og)));
		zaraz._cts = () =>
		{
			zaraz._timeouts && zaraz._timeouts.forEach((pF => clearTimeout(pF)));
			zaraz._timeouts = []
		};
		zaraz._rl = function()
		{
			w.zaraz.listeners && w.zaraz.listeners.forEach((pG => pG.item.removeEventListener(pG.type, pG.callback)));
			window.zaraz.listeners = []
		};
		history.pushState = function()
		{
			try
			{
				zaraz._rl();
				zaraz._cts && zaraz._cts()
			}
			finally
			{
				History.prototype.pushState.apply(history, arguments);
				setTimeout(zaraz.spaPageview, 100)
			}
		};
		history.replaceState = function()
		{
			try
			{
				zaraz._rl();
				zaraz._cts && zaraz._cts()
			}
			finally
			{
				History.prototype.replaceState.apply(history, arguments);
				setTimeout(zaraz.spaPageview, 100)
			}
		};
		zaraz._c = nt =>
		{
			const
			{
				event: nu,
				...nv
			} = nt;
			zaraz.track(nu,
			{...nv,
				__zarazClientEvent: !0
			})
		};
		zaraz._syncedAttributes = ["altKey", "clientX", "clientY", "pageX", "pageY", "button"];
		zaraz.__zcl.track = !0;
		d.addEventListener("visibilitychange", (bt =>
		{
			zaraz._c(
			{
				event: "visibilityChange",
				visibilityChange: [
				{
					state: d.visibilityState,
					timestamp: (new Date).getTime()
				}]
			}, 1)
		}));
		zaraz.__zcl.visibilityChange = !0;
		zaraz.__zarazMCListeners = {
			"google-analytics_v4_XykK": ["visibilityChange"]
		};
		zaraz._p(
		{
			"e": ["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)", "(function(w,d){{x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-JDWBSDTLRF&cid=71f07f08-7de3-4a37-8f1d-046b3c0c91c7&_u=KGDAAEADQAAAAC%7E&z=1446231549\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-JDWBSDTLRF&cid=71f07f08-7de3-4a37-8f1d-046b3c0c91c7&_u=KGDAAEADQAAAAC%7E&z=1446231549&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();};{const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);};{const el = document.createElement('script');Object.entries(JSON.parse(decodeURIComponent(`%7B%22src%22%3A%22https%3A%2F%2Ftag.clearbitscripts.com%2Fv1%2Fpk_272336dc850752bc1743c99f4343f140%2Ftags.js%22%2C%22referrerpolicy%22%3A%22strict-origin-when-cross-origin%22%2C%22onload%22%3A%22%7Bdocument.dispatchEvent(new%20Event(%5C%22loaded-bfb363b6-6a69-4fbf-ba92-f788f24f0746%5C%22))%7D%22%2C%22order-id%22%3A%22bfb363b6-6a69-4fbf-ba92-f788f24f0746%22%7D`))).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);};{const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);};{window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent(\"FAITRACKER_QUEUED_EVENT\");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent(\"FAITRACKER_INIT_EVENT\"))},this.call=function(){var e={k:\"\",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener(\"message\",function(t){\"faitracker\"===t.data.origin&&this.call(\"message\",t.data.type,t.data.message)})},this.message(),this.init(\"sv5x5pr7j3cc5tk0ogw6s4nh9accgfri\",{host:\"https://api.factors.ai\"}),this}(),function(){var t=document.createElement(\"script\");t.type=\"text/javascript\",t.src=\"https://app.factors.ai/assets/factors.js\",t.async=!0,(d=document.getElementsByTagName(\"script\")[0]).parentNode.insertBefore(t,d)}();};{const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);};{!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = [\"identify\", \"collect\"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement(\"script\");script.type = \"text/javascript\";script.async = true;script.src = \"https://s3-us-west-2.amazonaws.com/b2bjsstore/b/\" + key + \"/reb2b.js.gz\";var first = document.getElementsByTagName(\"script\")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = \"1.0.1\";reb2b.load(\"7R6G5YHP5265\");}();}})(window,document)"],
			"f": [
				["https://bat.bing.com/action/0?evt=pageLoad&ti=136026300&tl=Elite+Team+of+Software+Engineers.+Leading+Edge+tech+in+Web2+and+Web3.&rn=620391&sw=800&sh=600&lg=&p=https%3A%2F%2Fwebisoft.com%2F&Ver=2&mid=1cad6079-7af7-41e5-8d12-a9804f5fce7e&msclkid=N",
				{}],
				["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-JDWBSDTLRF&cid=71f07f08-7de3-4a37-8f1d-046b3c0c91c7&_u=KGDAAEADQAAAAC%7E&z=1446231549&slf_rd=1",
				{}]
			]
		})
	})(window, document)
}
catch (e)
{
	throw fetch("/cdn-cgi/zaraz/t"), e;
}
