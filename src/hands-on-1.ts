import axios from "axios";

//* create interface for content
interface PostedBy {
  id: string;
  username: string;
  name: string;
  registeredAt: string;
}

//* create interface for content
interface Content {
  id: number;
  videoTitle: string;
  videoUrl: string;
  comment: string;
  rating: number;
  thumbnailUrl: string;
  creatorName: string;
  creatorUrl: string;
  createdAt: string;
  updatedAt: string;
  postedBy: PostedBy;
}

interface ContentListResponse {
  data: Content[];
}

//* create function for get content
const getContents = async () => {
  try {
    const response = await axios.get<ContentListResponse>(
      `https://api.learnhub.thanayut.in.th/content`
    );
    const contentList = response.data.data;
    //* convert string to date
    const filterDate = new Date("2023-05-22");

    //* test convert string to date
    // const filterDate = Math.floor(new Date().getTime() / 1000.0);

    //* function filter content is createAt before < 22-05-2023
    const filteredContents = contentList.filter((content) => {
      const contentDate = new Date(content.createdAt);
      return contentDate < filterDate;
    });

    console.log(filteredContents);

    //* example console.log for test get result api
    // console.log(contentList[0].id);
  } catch (error) {
    console.error(error);
  }
};

getContents();

// const getContents = async () => {
//   try {
//     const response = await axios.get<ContentListResponse>(
//       `https://api.learnhub.thanayut.in.th/content-eiei`
//     );
//     const contentList = response.data.data;

//     console.log(contentList[0].id);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getContents();

// const result: ContentListResponse = {
//   data: [
//     {
//       id: 178,
//       videoTitle: "Taylor Swift - It's My Life  [Taylor Swift AI Cover]",
//       videoUrl: "https://www.youtube.com/watch?v=lumln1KSPbM",
//       comment: "Good",
//       rating: 5,
//       thumbnailUrl: "https://i.ytimg.com/vi/lumln1KSPbM/hqdefault.jpg",
//       creatorName: "We Love Music",
//       creatorUrl: "https://www.youtube.com/@welovemusic8457",
//       createdAt: "2023-09-18T04:06:35.000Z",
//       updatedAt: "2023-09-18T04:06:51.000Z",
//       postedBy: {
//         id: "ddc67a2d-0b30-4d58-b99e-8f76d7121def",
//         username: "bankbk",
//         name: "bankbk",
//         registeredAt: "2023-09-18T04:06:03.000Z",
//       },
//     },

//     {
//       id: 177,
//       videoTitle: "ครูพิเศษจอมป่วน รีบอร์น! l ตอน 79 [พากย์ไทย]",
//       videoUrl: "https://www.youtube.com/watch?v=j_OfPqQGNlc",
//       comment: "1234",
//       rating: 5,
//       thumbnailUrl: "https://i.ytimg.com/vi/j_OfPqQGNlc/hqdefault.jpg",
//       creatorName: "Cartoon Club Channel",
//       creatorUrl: "https://www.youtube.com/@CartoonClubChannel",
//       createdAt: "2023-08-30T11:17:57.000Z",
//       updatedAt: "2023-08-30T11:18:47.000Z",
//       postedBy: {
//         id: "8c158534-e511-436c-8a2d-c76e3ba899d3",
//         username: "1234",
//         name: "asdawd",
//         registeredAt: "2023-06-15T03:35:38.000Z",
//       },
//     },
//   ],
// };
