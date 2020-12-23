/*
 * Zhihu_Caffee
 *
 * Zhihu_Caffee can craw data from ZhihuDaily and post article by user,  allowing users to reply the article and interact with other users.
 *
 * API version: 0.1.4
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger
import (
	"time"
)

type Reply struct {

	Id int64 `json:"id,omitempty"`

	LikeNum int64 `json:"likeNum,omitempty"`

	CreateTime time.Time `json:"createTime,omitempty"`

	Content string `json:"content,omitempty"`

	AuthorUrl string `json:"author-url,omitempty"`

	Url string `json:"url,omitempty"`
}
