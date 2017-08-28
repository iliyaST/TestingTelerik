"use strict";var _slicedToArray=function(){function e(e,t){var a=[],r=!0,o=!1,l=void 0;try{for(var i,n=e[Symbol.iterator]();!(r=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&n.return&&n.return()}finally{if(o)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),blogControllers={get:function(e,t){function a(a){t.get("comments").then(function(t){var r=Handlebars.compile(t),o={},l=void 0,i=void 0,n=void 0,s=void 0;e.getPostComments(a).on("value",function(t){o.comments=t.val(),l=r(o),$(".post-comments").html(l),$(".btn-add-comment").click(function(t){n=$("#name"),s=$("#message").val(),i={authorKey:JSON.parse(localStorage.getItem("currentUser")).uid,authorName:JSON.parse(localStorage.getItem("currentUser")).displayName,authorEmail:JSON.parse(localStorage.getItem("currentUser")).email,authorImg:JSON.parse(localStorage.getItem("currentUser")).photoURL,content:s,timestamp:firebase.database.ServerValue.TIMESTAMP},e.createComment(a,i).then(function(e){toastr.info("Thanks for your comment")}).catch(function(e){return toastr.info("Comment could not be posted")})})})})}function r(e,a){var r={};"search"==e?(e="title_lower",r=BLOG_HOME_PAGE_DATA_SEARCH):"category"==e&&(r=BLOG_HOME_CATEGORY,r.title=a+" Category",r.breadcrumbs[2].title=a),Promise.all([t.get("blog"),t.get("page-header"),t.get("sidebar")]).then(function(t){var o=_slicedToArray(t,3),l=o[0],i=o[1],n=o[2],s=firebase.database().ref("posts");s.orderByChild(e).startAt(a).endAt(a+"").once("value",function(e){var t={posts:e.val(),page:r,categories:JSON.parse(getLocalStorageItem("categories"))};t.page.searchValue=a;var o=Handlebars.compile(l),c=Handlebars.compile(i),m=Handlebars.compile(n),g=o(t),d=c(t.page),u=m(t);$("#container").html(g),$(".page-header").html(d),$(".sidebar").html(u),$(".main-nav li.active").removeClass("active"),$('a[href^="#/blog"]').parent("li").addClass("active"),window.scrollTo(0,0),s.off()})})}return{blogHome:function(){if(arguments[1]){r(arguments[1].split("=")[0],arguments[1].split("=")[1])}else Promise.all([e.getAllCategories(),e.getAllPosts(),t.get("blog"),t.get("page-header"),t.get("sidebar")]).then(function(e){var t=_slicedToArray(e,5),a=t[0],r=t[1],o=t[2],l=t[3],i=t[4],n=Handlebars.compile(o),s=Handlebars.compile(l),c=Handlebars.compile(i),m={},g=BLOG_HOME_PAGE_DATA,d=void 0,u=void 0,v=void 0;setLocalStorageItem("categories",JSON.stringify(a.val())),m.categories=a.val(),m.posts=r.val(),d=n(m),u=s(g),v=c(m),$("#container").html(d),$(".page-header").html(u),$(".sidebar").html(v),$(".main-nav li.active").removeClass("active"),$('a[href^="#/blog"]').parent("li").addClass("active"),window.scrollTo(0,0)}).catch(function(e){return console.log(e)})},blogSingle:function(r){Promise.all([e.getAllCategories(),e.getAllPosts(),e.getPostByKey(r.key),t.get("blog-single"),t.get("page-header"),t.get("sidebar")]).then(function(e){var t=_slicedToArray(e,6),o=t[0],l=t[1],i=t[2],n=t[3],s=t[4],c=t[5],m=Handlebars.compile(n),g=Handlebars.compile(s),d=Handlebars.compile(c),u={},v=BLOG_SINGLE_PAGE_DATA,p=void 0,b=void 0,h=void 0;u.categories=o.val(),u.posts=l.val(),u.post=i.val(),v.title=u.post.title,v.subtitle=u.post.subtitle,v.breadcrumbs[2]={url:"#/blog/"+r.key,title:u.post.title},p=m(u),b=g(v),h=d(u),$("#container").html(p),$(".page-header").html(b),$(".sidebar").html(h),$(".main-nav li.active").removeClass("active"),$('a[href^="#/blog"]').parent("li").addClass("active"),window.scrollTo(0,0),a(r.key)}).catch(function(e){return console.log(e)})}}}};