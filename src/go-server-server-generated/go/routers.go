/*
 * zhihu_caffe
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 0.1.2
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},

	Route{
		"CreateArticle",
		strings.ToUpper("Post"),
		"/users/{userid}/articles/new",
		CreateArticle,
	},

	Route{
		"DeleteArticle",
		strings.ToUpper("Delete"),
		"/users/{userid}/articles/{articleid}",
		DeleteArticle,
	},

	Route{
		"GetArticle",
		strings.ToUpper("Get"),
		"/api/users/{userid}/articles/{articleid}",
		GetArticle,
	},

	Route{
		"GetArticlePage",
		strings.ToUpper("Get"),
		"/users/{userid}/articles/{articleid}",
		GetArticlePage,
	},

	Route{
		"GetArticles",
		strings.ToUpper("Get"),
		"/api/users/{userid}/articles",
		GetArticles,
	},

	Route{
		"GetArticlesPage",
		strings.ToUpper("Get"),
		"/users/{userid}/articles",
		GetArticlesPage,
	},

	Route{
		"GetCreateArticlePage",
		strings.ToUpper("Get"),
		"/users/{userid}/articles/new",
		GetCreateArticlePage,
	},

	Route{
		"LikeArticle",
		strings.ToUpper("Put"),
		"/users/{userid}/articles/{articleid}/like",
		LikeArticle,
	},

	Route{
		"UpdateArticle",
		strings.ToUpper("Put"),
		"/users/{userid}/articles/{articleid}",
		UpdateArticle,
	},

	Route{
		"CreateReply",
		strings.ToUpper("Post"),
		"/users/{userid}/articles/{articleid}/replies/new",
		CreateReply,
	},

	Route{
		"GetReplies",
		strings.ToUpper("Get"),
		"/api/users/{userid}/articles/{articleid}/replies",
		GetReplies,
	},

	Route{
		"GetReply",
		strings.ToUpper("Get"),
		"/api/users/{userid}/articles/{articleid}/replies/{replyid}",
		GetReply,
	},

	Route{
		"LikeReply",
		strings.ToUpper("Put"),
		"/users/{userid}/articles/{articleid}/replies/{replyid}/like",
		LikeReply,
	},

	Route{
		"GetArticlesPageByTag",
		strings.ToUpper("Get"),
		"/tags/{tagname}",
		GetArticlesPageByTag,
	},

	Route{
		"GetTags",
		strings.ToUpper("Get"),
		"/api/tags",
		GetTags,
	},

	Route{
		"SearchArticlesByTag",
		strings.ToUpper("Get"),
		"/api/tags/{tagname}/articles",
		SearchArticlesByTag,
	},

	Route{
		"ApiGet",
		strings.ToUpper("Get"),
		"/api",
		ApiGet,
	},

	Route{
		"DeleteUser",
		strings.ToUpper("Delete"),
		"/users/{userid}",
		DeleteUser,
	},

	Route{
		"GetSignupPage",
		strings.ToUpper("Get"),
		"/users/signup",
		GetSignupPage,
	},

	Route{
		"GetUserInfo",
		strings.ToUpper("Get"),
		"/api/users/{userid}",
		GetUserInfo,
	},

	Route{
		"GetUserPage",
		strings.ToUpper("Get"),
		"/users/{userid}",
		GetUserPage,
	},

	Route{
		"GetUsers",
		strings.ToUpper("Get"),
		"/api/users",
		GetUsers,
	},

	Route{
		"UpdateUser",
		strings.ToUpper("Put"),
		"/users/{userid}",
		UpdateUser,
	},

	Route{
		"UserLogin",
		strings.ToUpper("Post"),
		"/users/login",
		UserLogin,
	},

	Route{
		"UserLogout",
		strings.ToUpper("Get"),
		"/users/logout",
		UserLogout,
	},

	Route{
		"UserSignup",
		strings.ToUpper("Post"),
		"/users/signup",
		UserSignup,
	},
}
