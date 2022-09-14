<template>
  <div :id="id" :refs="refs" class="p-4 md:w-2/3 lg:w-[55%] xl:1/3 mx-auto">
    <ul :class="useGuideLines ? 'use-guide-lines' : ''">
      <li
        v-for="(parentComment, parentCommentIndex) in commentsDataCopy"
        :key="parentCommentIndex"
      >
        <div class="container bootstrap snippets bootdey">
          <CRow>
            <CCol md="12">
              <div class="position-relative comments-container">
                <div class="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/user_1.jpg"
                    class="avatar"
                    alt=""
                  />
                  <!-- Comment data -->
                  <div class="comment">
                    <p class="comment-info">
                      Dec 18, 2014 By:
                      <a href="#">{{ parentComment.firstName }}</a>
                      <CButton
                        color="info"
                        class="ms-2 text-white align-items-center ml-auto"
                        shape="rounded-pill"
                        size="sm"
                        v-c-tooltip="{
                          content: 'Cevapla',
                          placement: 'top',
                        }"
                        @click="() => (openedModals.addComment = true)"
                      >
                        <CIcon icon="cil-comment-bubble" />
                      </CButton>
                    </p>
                    <p>
                      {{ parentComment.comment }}
                    </p>
                  </div>
                  <div v-if="parentComment.replyCount > 0">
                    <ul class="comment-reply-container">
                      <li
                        class="comment-reply"
                        v-for="(
                          childComment, childCommentIndex
                        ) in parentComment.replies"
                        :key="childCommentIndex"
                      >
                        <ul class="comments">
                          <li class="clearfix">
                            <img
                              :src="childComment.profilePicture"
                              class="avatar"
                              alt=""
                            />
                            <div class="comment">
                              <p class="comment-info">
                                Dec 20, 2014 By:
                                <a href="#">{{ childComment.firstName }}</a>
                                <CButton
                                  color="info"
                                  class="ms-2 text-white align-items-center"
                                  shape="rounded-pill"
                                  size="sm"
                                  v-c-tooltip="{
                                    content: 'Cevapla',
                                    placement: 'top',
                                  }"
                                  @click="
                                    () => (openedModals.addComment = true)
                                  "
                                >
                                  <CIcon icon="cil-comment-bubble" />
                                </CButton>
                              </p>
                              <p>
                                {{ childComment.comment }}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!-- Show comment/Loading button -->
                  <div
                    v-if="
                      parentComment.replyCount > 0 &&
                      !parentComment.isReplyCountExceeded
                    "
                    class="comment-show-reply"
                    @click="
                      async function attemptLoadComments() {
                        parentComment.loadingReplies = true
                        // if its not created yet
                        if (!parentComment.loadedCommentCount) {
                          parentComment.loadedCommentCount = 5
                        }
                        // if its smaller than reply count then +5 page size
                        else if (
                          parentComment.loadedCommentCount <
                          parentComment.replyCount
                        ) {
                          parentComment.loadedCommentCount += 5
                        } else {
                          parentComment.isReplyCountExceeded = true
                        }
                        await emitLoadData({
                          pageNumber: 0,
                          pageSize: parentComment.loadedCommentCount,
                          commentData: parentComment,
                        })
                        if (
                          parentComment.loadedCommentCount >=
                          parentComment.replyCount
                        ) {
                          parentComment.isReplyCountExceeded = true
                        }
                        parentComment.loadingReplies = false
                      }
                    "
                  >
                    <span v-if="parentComment.loadingReplies">
                      <span
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Loading...
                    </span>
                    <span v-else> Show more </span>
                  </div>
                  <!-- Hide comment button -->
                  <div
                    class="comment-show-reply"
                    v-if="
                      parentComment.loadedCommentCount != 0 &&
                      parentComment.loadedCommentCount >
                        parentComment.replyCount
                    "
                    @click="
                      async function attemptHideComments() {
                        parentComment.loadedCommentCount = 0
                        parentComment.isReplyCountExceeded = false
                        await emitLoadData({
                          pageNumber: 0,
                          pageSize: 0,
                          commentData: parentComment,
                        })
                      }
                    "
                  >
                    Hide
                  </div>
                </div>
              </div>
            </CCol>
          </CRow>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import avatar from '@/assets/images/avatars/1.jpg'
export default {
  props: {
    comments: {
      default: [
        {
          uuid: 12,
          profilePicture: avatar,
          firstName: 'PARENT YORUM',
          comment: 'YORUM',
          replyCount: 11,
          replies: [
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAP YORUM ISMI',
              comment: 'CEVAP YORUMU',
            },
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAPPP ISIM',
              comment: 'CEVAP YORUMU',
            },
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAPPP ISIM',
              comment: 'CEVAP YORUMU',
            },
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAPPP ISIM',
              comment: 'CEVAP YORUMU',
            },
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAPPP ISIM',
              comment: 'CEVAP YORUMU',
            },
            {
              uuid: 13,
              profilePicture: avatar,
              firstName: 'CEVAPPP ISIM',
              comment: 'CEVAP YORUMU',
            },
          ],
        },
      ],
    },
    id: { default: 'viewCommentsID' },
    refs: { default: 'viewCommentsRef' },
    useGuideLines: { default: true },
  },
  data() {
    return {
      commentsDataCopy: [],
    }
  },
  created() {
    this.commentsDataCopy = this.comments
  },
  methods: {
    async emitLoadData(data) {
      return this.$emit('loadData', data)
    },
  },
}
</script>

<style scoped>
/* Remove default bullets */
ul,
#commentsView {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
#commentsView {
  margin: 0;
  padding: 0;
}

/* Style the comment-show-reply/arrow */
.comment-show-reply {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  cursor: pointer;
  user-select: none; /* Prevent text selection */
  text-align: center;
  margin: 20px 0 20px 0;
  color: rgba(0, 0, 0, 0.5);
}

/* Create the comment-show-reply/arrow with a unicode, and style it */
/* .comment-show-reply-loading {
  content: '\25B6';
  color: black;
  display: inline-block;
  margin-right: 6px;
} */

/* Rotate the comment-show-reply/arrow icon when clicked on (using JavaScript) */
.comment-show-reply-loading::before {
  transform: rotate(90deg);
}
.use-guide-lines,
.use-guide-lines .comment,
.use-guide-lines .comment-reply {
  position: relative;
}

.use-guide-lines .comment-reply {
  list-style: none;
}

.use-guide-lines .comment-reply::before,
.use-guide-lines .comment-reply::after {
  content: '';
  position: absolute;
}
.use-guide-lines .comment-reply::before {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  top: 9px;
  width: 8px;
  height: 0;
}
.use-guide-lines .comment-reply::after {
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 0px;
  top: 2px;
}
.use-guide-lines .comment > .comment-reply:last-child::after {
  height: 8px;
}

.comments-container::before,
.comments-container::after,
.comments-container-form::before,
.comments-container-form::after {
  content: '';
  display: table;
  clear: both;
}

.comments-container {
  padding-left: 15%;
  padding-right: 15%;
}

.comments-container ul {
  list-style-type: none;
}

.comments-container img {
  opacity: 1;
  filter: Alpha(opacity=100);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}

.comments-container img.avatar {
  position: relative;
  float: left;
  margin-left: 0;
  margin-top: 0;
  width: 65px;
  height: 65px;
}

.comments-container .comment {
  border: 1px solid #eee;
  margin-bottom: 20px;
  margin-left: 85px;
  margin-right: 0px;
  padding: 10px 20px;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
  background: #fff;
  color: #6b6e80;
  position: relative;
}

.comments-container .comment-info {
  font-size: 13px;
  color: #aaaaaa;
  padding-bottom: 8px;
  margin-bottom: 10px !important;
  border-bottom: 1px solid #eee;
}

.comments-container ul.comments ul {
  list-style-type: none;
  padding: 0;
  margin-left: 85px;
}

.comments-container-form {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 40px;
}

.comments-container h3,
.comments-container-form h3 {
  margin-bottom: 40px;
  font-size: 26px;
  line-height: 30px;
  font-weight: 800;
}
</style>
