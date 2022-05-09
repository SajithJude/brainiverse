function Galaxy(e) { this.particleCount = e; this.articleTable = {}; this.keyMaster = []; this.chosensphere = null; this.previewsphere = null; this.previewbeacon = null; this.particleSystem = null; this.axes = new THREE.Object3D; this.historyPath = new THREE.Object3D; this.historyCounter = 0; this.closeStars = []; this.neighbors = 0; this.orbitControl = null; this.botCount = 1e4; this.targetCircle = null; this.lockedOn = null; this.suggestionSpheres = null; this.linkTable = {}; this.GC = []; this.categories = {}; this.categories["b"] = { main: "Culture", sub: "Culture", c: "#f90058" }; this.categories["c"] = { main: "Belief", sub: "Culture", c: "#f90058" }; this.categories["d"] = { main: "Technology and applied sciences", sub: "Science", c: "#07d6a1" }; this.categories["e"] = { main: "Society", sub: "Society", c: "#bf8bff" }; this.categories["f"] = { main: "Health", sub: "Science", c: "#07d6a1" }; this.categories["g"] = { main: "Language", sub: "Culture", c: "#f90058" }; this.categories["h"] = { main: "Business", sub: "Society", c: "#bf8bff" }; this.categories["i"] = { main: "Arts", sub: "Culture", c: "#f90058" }; this.categories["j"] = { main: "History and events", sub: "History", c: "#ff9a00" }; this.categories["k"] = { main: "Agriculture", sub: "Society", c: "#bf8bff" }; this.categories["l"] = { main: "People", sub: "People", c: "#ffff66" }; this.categories["m"] = { main: "Politics", sub: "Society", c: "#bf8bff" }; this.categories["n"] = { main: "Science", sub: "Science", c: "#07d6a1" }; this.categories["o"] = { main: "Geography and places", sub: "Geography", c: "#0292ef" }; this.categories["p"] = { main: "Education", sub: "Society", c: "#bf8bff" }; this.categories["q"] = { main: "Sports", sub: "Culture", c: "#f90058" }; this.categories["r"] = { main: "Philosophy", sub: "Culture", c: "#f90058" }; this.categories["s"] = { main: "Law", sub: "Society", c: "#bf8bff" }; this.categories["t"] = { main: "Environment", sub: "Society", c: "#bf8bff" }; this.categories["u"] = { main: "Mathematics", sub: "Science", c: "#07d6a1" }; this.categories["v"] = { main: "Computing", sub: "Science", c: "#07d6a1" }; this.categories["z"] = { main: "Unknown", sub: "Unknown", c: "#CCC" } } Galaxy.prototype.buildSystem = function (e) { var t = new THREE.MeshBasicMaterial({ color: 16777215, wireframe: true }); var n = new THREE.CircleGeometry(.6, 64); n.vertices.shift(); this.lockedOn = new THREE.Object3D; var r = new THREE.LineBasicMaterial({ color: 16777215 }); var i = new THREE.Line(n, r); this.lockedOn.add(i); var s = i.clone(); s.rotation.x = Math.PI / 2; this.lockedOn.add(s); var o = i.clone(); o.rotation.y = Math.PI / 2; this.lockedOn.add(o); e.add(this.lockedOn); 
var r = new THREE.LineBasicMaterial({ color: 16777215 }); 
var u = new THREE.LineBasicMaterial({ color: 16777215 }); 
var a = new THREE.CircleGeometry(60, 64); 
var n = new THREE.CircleGeometry(10, 64); 
a.vertices.shift(); n.vertices.shift(); 
this.targetCircle = new THREE.Object3D; 
this.targetCircle.position.z = 10; 
this.targetCircle.add(new THREE.Line(a, r)); 
var f = new THREE.SphereGeometry(.3, 32, 32); 
var l = new THREE.MeshBasicMaterial({ color: 14540253, transparent: true, blending: THREE.AdditiveBlending, opacity: .8 }); 
var c = new THREE.MeshBasicMaterial({ color: 8052858, transparent: true, opacity: .6, blending: THREE.AdditiveBlending });
var h = new THREE.SphereGeometry(.3, 32, 32); 
var p = new THREE.CylinderGeometry(.1, .1, 1e3, 5, 1, true); var d = new THREE.MeshBasicMaterial({ color: 16777215, transparent: true, opacity: 1, blending: THREE.AdditiveBlending }); 
var v = new THREE.SphereGeometry(.5, 32, 32); 
var m = new THREE.MeshBasicMaterial({ color: 8052858, transparent: true, opacity: .7, blending: THREE.AdditiveBlending }); 

this.historySphere = new THREE.Mesh(v, m); 
this.previewbeacon = new THREE.Object3D;

this.previewbeacon.add(new THREE.Mesh(p, c));
 this.chosensphere = new THREE.Mesh(f, l);
 
 this.previewsphere = new THREE.Mesh(h, d);
 
 this.previewbeacon.rotation.y = Math.PI / 2; this.previewbeacon.rotation.x = Math.PI / 2; this.lockedOn.position.set(2e3, 0, 0); this.previewbeacon.position.set(2e3, 0, 0); this.previewsphere.position.set(2e3, 0, 0); e.add(this.previewbeacon); e.add(this.chosensphere); e.add(this.previewsphere); this.createMeshJSON(e) }; Galaxy.prototype.colorize = function (e) { var t = []; var n; var r = ["#f90058", "#f90058", "#07d6a1", "#bf8bff", "#07d6a1", "#f90058", "#bf8bff", "#f90058", "#ff9a00", "#bf8bff", "#ffff66", "#bf8bff", "#07d6a1", "#0292ef", "#bf8bff", "#f90058", "#f90058", "#bf8bff", "#bf8bff", "#07d6a1", "#07d6a1", "#CCC", "#CCC"]; var i = ["#385e80", "#2c5a82", "#3e5f87", "#526b8d", "#37709c", "#2277a0", "#488296", "#9d968d", "#ac907c", "#9f846e", "#b58360", "#a9764c", "#ad6a39"]; var s = ["#3b83bd", "#2a7abf", "#4585c6", "#6a9ccc", "#3aa5db", "#1eb0de", "#56bfd5", "#dcd5cc", "#e6d0b7", "#ddc2a2", "#ecc187", "#e5af5e", "#e79b3d"]; var o = ["#0384FD", "#0370F0", "#0B81FF", "#28A1FF", "#08B1FF", "#00BEF8", "#08DEFF", "#dcd5cc", "#e6d0b7", "#FFAB13", "#FFAB13", "#FF8D06", "#E85D00", "#E85D00"]; for (var i = 0; i < this.keyMaster.length; i++) { n = this.articleTable[this.keyMaster[i]]; if (!e) t.push(new THREE.Color(o[Math.round(Math.sqrt(n.getX() * n.getX() + n.getY() * n.getY()) / 370 * 13)])); else t.push(new THREE.Color(r[n.getCategory()])) } this.particleSystem.geometry.colors = t; this.particleSystem.geometry.colorsNeedUpdate = true }; Galaxy.prototype.createMeshJSON = function (e) { var t = 12; var n = 0; var r = 0; myThis = this; var i = 0; $.getJSON("polyframe/STEP4poplight.json", function (s) { var o, u = [], a; var f = new THREE.Geometry; $.each(s.importer, function (e, s) { var o = new Article(e, s["x"] / t - n, s["y"] / t - r, this.particleCount, s["c"]); u[e] = o; myThis.keyMaster.push(e); particle = new THREE.Vector3(o.getX(), o.getY(), o.getZ()); f.vertices.push(particle); i++ }); myThis.articleTable = u; material = new THREE.PointCloudMaterial({ color: 16777215, size: .6, transparent: true, opacity: .95, map: THREE.ImageUtils.loadTexture("textures/dot2.png"), blending: THREE.AdditiveBlending, vertexColors: true }); material.alphaTest = .7; myThis.particleSystem = new THREE.PointCloud(f, material); myThis.colorize(false); myThis.particleSystem.frustrumCulled = true; myThis.orbitControl = new OrbitControl(u, myThis.botCount, myThis.particleCount); e.add(myThis.orbitControl.getMesh()); e.add(myThis.particleSystem); $("#loading").fadeOut(300, function () { $("#start").fadeIn(300) }); clearTimeout(logotrigger); myThis.colorize(true) }) }; Galaxy.prototype.animateLockedOn = function (e) { this.lockedOn.rotation.x += e / 3; this.lockedOn.rotation.y += e / 2 }; Galaxy.prototype.getTable = function () { return this.articleTable }; Galaxy.prototype.getArticleAtX = function (e) { var t = this.keyMaster[e]; return this.articleTable[t] }; Galaxy.prototype.getTrueID = function (e) { var t = []; var n = []; var r; for (var i = 0; i < e.length; i++) { r = this.getArticleAtX(e[i]); t[i] = r.getId(); n[i] = r.getCategory() } return [t, n] }; Galaxy.prototype.getArticle = function (e) { return this.articleTable[e] }; Galaxy.prototype.getSystem = function () { return this.particleSystem }; Galaxy.prototype.setLockedPosition = function (e) { var t = this.articleTable[e]; this.lockedOn.position.set(t.getX(), t.getY(), t.getZ()) }; Galaxy.prototype.resetLockedPosition = function () { this.lockedOn.position.set(0, 6e3, 0) };
 Galaxy.prototype.setChosenPosition = function (e, t, n) { this.chosensphere.position.set(e, t, n) }; Galaxy.prototype.setTargetPosition = function (e, t) { e = Math.min(400, e); e = Math.max(-400, e); t = Math.min(400, t); t = Math.max(-400, t); this.targetCircle.position.set(e, t, 10) }; Galaxy.prototype.resetTargetPosition = function () { this.targetCircle.position.set(6e3, 0, 0) }; Galaxy.prototype.getTargetPosition = function (e, t, n) { return [this.targetCircle.position.x, this.targetCircle.position.y] }; Galaxy.prototype.setPreviewPosition = function (e, t, n, r, i) { var s = Math.sqrt(e.position.z); this.previewbeacon.position.set(0, 6e3, 0); this.previewsphere.position.set(t, n, r) }; Galaxy.prototype.resetPreviewPosition = function () { this.previewsphere.position.set(6e3, 0, 0); this.previewbeacon.position.set(6e3, 0, 0) }; Galaxy.prototype.updateBots = function () { if (this.orbitControl) this.orbitControl.updateAll(this.articleTable) }; Galaxy.prototype.showHistory = function (e) { if (this.historyPath) e.remove(this.historyPath); var t = this.articleTable; var n = []; var r = new THREE.Object3D; var i = 0; var s = 0, o = 0, u = 0, a = 0; var f; $("#previousvisits").find("a").each(function () { var e = $(this).attr("id"); var r = e.substring(1, e.length); if (t[r] !== undefined && t[i] !== undefined && i !== 0) { n.push({ begin: i, end: r }) } i = r }); var l = new THREE.MeshBasicMaterial({ color: 12303291, transparent: true, opacity: 1, blending: THREE.AdditiveBlending }); diff = n.length - this.historyCounter; for (var c = 0; c < diff; c++) { f = this.historySphere.clone(); f.position.set(t[n[c]["begin"]].getX(), t[n[c]["begin"]].getY(), t[n[c]["begin"]].getZ()); this.historyPath.add(f); this.historyPath.add(this.buildAxis("history", 0, t[n[c]["begin"]].getX(), t[n[c]["begin"]].getY(), t[n[c]["begin"]].getZ(), t[n[c]["end"]].getX(), t[n[c]["end"]].getY(), t[n[c]["end"]].getZ(), t[n[c]["end"]].getId(), 16777215)); if (t[n[c]["begin"]].getX() > u) u = t[n[c]["begin"]].getX(); if (t[n[c]["begin"]].getY() > a) a = t[n[c]["begin"]].getY(); if (t[n[c]["begin"]].getX() < s) s = t[n[c]["begin"]].getX(); if (t[n[c]["begin"]].getY() < o) o = t[n[c]["begin"]].getY() } this.historyCounter = n.length; n = null; if (this.historyPath.children.length > 60) { this.historyPath.remove(this.historyPath.children[60]) } var h = 60 + Math.sqrt(Math.pow(u - s, 2) + Math.pow(a - o, 2)); e.add(this.historyPath); return h }; Galaxy.prototype.hideHistory = function (e, t) { e.remove(this.historyPath) }; Galaxy.prototype.findNearBy = function (e, t, n) { var r; var i = e.position.z * window.innerHeight / window.innerWidth * .5; var s = e.position.z * window.innerHeight / window.innerWidth * .5; var o; var u = 100; var a; var f = [], l = []; var c; if (t === "EULER") { for (var h in this.articleTable) { r = this.articleTable[h]; if (Math.abs(r.getX() - e.position.x) > 50 || Math.abs(r.getX() - e.position.x) < 5) continue; if (Math.abs(r.getY() - e.position.y) > 30 || Math.abs(r.getY() - e.position.y) < 5) continue; if (Math.abs(r.getZ() - e.position.z) > 7) continue; c = Math.atan2(r.getY() - e.position.y, r.getX() - e.position.x); if (c - e.rotation.y < Math.PI / 3 || c - e.rotation.y > 2 * Math.PI / 3) continue; if (Math.random() > .5) l.push(r.getId()); if (l.length >= 4) break } } else { for (var h in this.articleTable) { if (Math.random() < 1 / e.position.z * 2) { r = this.articleTable[h]; if (Math.abs(r.getX() - e.position.x) > i) continue; if (Math.abs(r.getY() - e.position.y) > s) continue; if (Math.random() > .5) l.push(r.getId()); if (l.length >= 4) break } } } n.remove(this.suggestionSpheres); n.add(this.highLightParticles(this.closeStars, l)); this.closeStars = l; for (var p = 0; p < l.length; p++) { a = this.getArticle(l[p]); f.push({ x: a.getX(), y: a.getY(), z: a.getZ(), id: this.closeStars[p], cat: a.getCategory() }) } return f }; Galaxy.prototype.highLightParticles = function (e, t) { this.suggestionSpheres = new THREE.Object3D; var n = new THREE.SphereGeometry(.2, 32, 32); var r = new THREE.MeshBasicMaterial({ color: 16777215, transparent: true, opacity: 1, blending: THREE.AdditiveBlending }); var i = null; for (var s = 0; s < t.length; s++) { currentparticle = this.getArticle(t[s]); i = this.previewsphere.clone(); i.position.set(currentparticle.getX(), currentparticle.getY(), currentparticle.getZ()); this.suggestionSpheres.add(i) } return this.suggestionSpheres }; Galaxy.prototype.hideSuggestionSpheres = function (e) { e.remove(this.suggestionSpheres) }; 
 Galaxy.prototype.getLinksMesh = function () { return this.axes }; 
 Galaxy.prototype.getLinks = function () { return this.linkTable };
  Galaxy.prototype.identifyLink = function (e) { return this.linkTable[e] };
   Galaxy.prototype.hideLinks = function (e) { for (u = 0; u < this.axes.children.length; u++) { child = this.axes.children[u]; delete this.linkTable[child.id]; this.axes.remove(child) } e.remove(this.axes) }; 
   Galaxy.prototype.categoryColor = function (e) { var t = ""; if (e == 0 || e == 1 || e == 5 || e == 7 || e == 15) t = 16318552; else if (e == 2 || e == 4 || e == 6 || e == 12 || e == 19 || e == 20) t = 513697; else if (e == 3 || e == 9 || e == 11 || e == 14 || e == 16 || e == 17 || e == 18) t = 12553215; else if (e == 8) t = 16751104; else if (e == 10) t = 16777062; else if (e == 13) t = 168687; else if (e == 21 || e == 22) t = 16777215; return t }; Galaxy.prototype.categoryHex = function (e) { var t = ""; if (e == 0 || e == 1 || e == 5 || e == 7 || e == 15) t = "#f90058"; else if (e == 2 || e == 4 || e == 6 || e == 12 || e == 19 || e == 20) t = "#07d6a1"; else if (e == 3 || e == 9 || e == 11 || e == 14 || e == 16 || e == 17 || e == 18) t = "#bf8bff"; else if (e == 8) t = "#ff9a00"; else if (e == 10) t = "#FFFF66"; else if (e == 13) t = "#0292ef"; else if (e == 21 || e == 22) t = "#CCC"; return t }; Galaxy.prototype.highLightLink = function (e, t) { var n = this.categoryColor(t); for (u = 0; u < this.axes.children.length; u++) { child = this.axes.children[u]; if (child.id === e) { child.material.color.setHex(n) } else child.material.color.setHex(15790320); if (child.id === e) child.material.linewidth = 2.5; else child.material.linewidth = 1 } }; Galaxy.prototype.previewLink = function (e, t, n) { if (this.articleTable[n]) { newlink = this.buildAxis("preview", 1, e.getX(), e.getY(), e.getZ(), this.articleTable[n].getX(), this.articleTable[n].getY(), this.articleTable[n].getZ(), this.articleTable[n].getCategory()); this.axes.add(newlink); this.linkTable[newlink.id] = n } }; Galaxy.prototype.cleanse = function (e) { for (var t = this.GC.length - 1; t >= 0; t--) { this.GC[t] = null } this.GC.length = 0 }; Galaxy.prototype.updateLinks = function (e, t, n, r, i, s) { this.setChosenPosition(n.getX(), n.getY(), n.getZ()); var o = n.getFriends().length; var u = 1 + o / 120; if (u > 1.8) u = 1.8; this.chosensphere.scale.x = u; this.chosensphere.scale.y = u; this.chosensphere.scale.z = u; var a = n.getFriends(); var f, l, c; var h = n.getFriends().length; var p; if (i > a.length) i = a.length; var d = Math.max(0, i); friendId = a[d]; g = this.articleTable[friendId]; if (g) { dilute = (s - d + 1) / 10; p = this.buildAxis("link", h, n.getX(), n.getY(), n.getZ(), g.getX(), g.getY(), g.getZ(), dilute); this.axes.add(p); this.linkTable[p.id] = friendId } for (l = 0; l < this.axes.children.length; l++) { child = this.axes.children[l]; cat = l / this.axes.children.length; child.material.color.setHex(this.rgbToHex(255 * cat, 255 * cat, 255 * cat)) } var v = this.axes.children[0]; if (v) { delete this.linkTable[v.id]; this.axes.remove(v) } }; Galaxy.prototype.showLinks = function (e, t, n, r, i, s) { this.setChosenPosition(n.getX(), n.getY(), n.getZ()); var o = n.getFriends().length; var u = 1 + o / 120; if (u > 1.8) u = 1.8; this.chosensphere.scale.x = u; this.chosensphere.scale.y = u; this.chosensphere.scale.z = u; this.hideLinks(t); var a = n.getFriends(); var f, l, c; var h = n.getFriends().length; var p; if (i > a.length) i = a.length; var d = Math.max(0, i - 20); for (var s = d; s < i; s++) { friendId = a[s]; if (s === a.length - 1) h = 1; g = this.articleTable[friendId]; if (g) { dilute = (s - d + 1) / 10; p = this.buildAxis("link", h, n.getX(), n.getY(), n.getZ(), g.getX(), g.getY(), g.getZ(), dilute); this.axes.add(p); this.linkTable[p.id] = friendId } } if (r) { p = this.buildAxis("sublink", h, n.getX(), n.getY(), n.getZ(), this.articleTable[r].getX(), this.articleTable[r].getY(), this.articleTable[r].getZ(), this.articleTable[r].getCategory()); this.axes.add(p); this.linkTable[p.id] = r } t.add(this.axes) }; Galaxy.prototype.buildAxis = function (e, t, n, r, i, s, o, u, f) { if (t != 0) a = this.rgbToHex(255 * f, 255 * f, 255 * f); if (e === "history") a = this.rgbToHex(102, 204, 102); else if (e === "sublink") a = this.rgbToHex(125, 125, 125); else if (e === "preview") a = this.rgbToHex(255, 255, 255); var l = new THREE.Geometry; var c = new THREE.LineBasicMaterial({ linewidth: .6, color: parseInt(a) }); var h = 40; var p = 1 + Math.sqrt((n - s) * (n - s) + (r - o) * (r - o)) / 5; if (u % 2 === 0) p = -p; var d = new THREE.SplineCurve3([new THREE.Vector3(n, r, i), new THREE.Vector3((n + s) / 2 - (n - s) / p, (r + o) / 2 + (r - o) / p, (i + u) / 2), new THREE.Vector3(s, o, u)]); var v = d.getPoints(h); for (var m = 0; m < v.length; m++) { l.vertices.push(v[m]) } var g = new THREE.Line(l, c); return g }; Galaxy.prototype.rgbToHex = function (e, t, n) { function r(e) { e = parseInt(e, 10); if (isNaN(e)) return "00"; e = Math.max(0, Math.min(e, 255)); return "0123456789ABCDEF".charAt((e - e % 16) / 16) + "0123456789ABCDEF".charAt(e % 16) } return "0x" + r(e) + r(t) + r(n) }; Galaxy.prototype.addArticle = function (e, t) { i = 0; var n = 0, r = 0, i = 0, s = [], o = {}, u, a; for (var f = 0; f < t.length; f++) { if (this.articleTable[t[f]]) { i++; n += this.articleTable[t[f]].getX(); r -= this.articleTable[t[f]].getY() } } var l = new Article(e, n / i, r / i, this.particleCount, 22); this.articleTable[e] = l; this.keyMaster.push(e); var c = new THREE.Vector3(l.getX(), l.getY(), l.getZ()) }