/*
 * Zhihu_Caffee
 *
 * Zhihu_Caffee can craw data from ZhihuDaily and post article by user,  allowing users to reply the article and interact with other users.
 *
 * API version: 0.1.4
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type User struct {

	Id int64 `json:"id,omitempty"`

	Password string `json:"password,omitempty"`

	Articles []Article `json:"articles,omitempty"`

	Email string `json:"email,omitempty"`

	Url string `json:"url,omitempty"`
}
