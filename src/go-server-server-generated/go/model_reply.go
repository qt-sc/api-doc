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
