export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nichname: "푸라하",
      },
      content: "첫 번째 게시글",
      Images: [{
        src: 'https://user-images.githubusercontent.com/42174207/180648569-49356a1f-e31e-4bc2-9841-1ae323fce8e3.jpg',
      }, {
        src: 'https://user-images.githubusercontent.com/42174207/180648569-49356a1f-e31e-4bc2-9841-1ae323fce8e3.jpg'
      }],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          content: "좋은 글 잘 봤습니다.",
        },
        {
          User: {
            nickname: "rebecca",
          },
          content: "추천 누르고 갑니다.",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: 'temp contents'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
