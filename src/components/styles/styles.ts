import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 500px;
  }
  ul {
    list-style: none;
  }
  .emoji {
    font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .searchInput {
    input {
      width: 82.5%;
    }
    button {
      height: 38px;
    }
    
  }
`;
