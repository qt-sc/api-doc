/*
 * Zhihu_Caffe
 *
 * Zhihu_Caffe can craw data from ZhihuDaily and post article by user,  allowing users to reply the article and interact with other users.
 *
 * API version: 0.1.4
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
		"GetArticles",
		strings.ToUpper("Get"),
		"/api/users/{userid}/articles",
		GetArticles,
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
		"GetApis",
		strings.ToUpper("Get"),
		"/api",
		GetApis,
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
		"DeleteUser",
		strings.ToUpper("Delete"),
		"/users/{userid}",
		DeleteUser,
	},

	Route{
		"GetUserInfo",
		strings.ToUpper("Get"),
		"/api/users/{userid}",
		GetUserInfo,
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
