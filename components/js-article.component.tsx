import { Typography } from "@mui/material";
import { FC, Fragment } from "react";

const sections = [
  {
    title: "Introduction",
    content: `JavaScript, often abbreviated as JS, is a dynamic and versatile
    programming language that has become an integral part of web development
    and modern software engineering. Since its inception in the mid-1990s,
    JavaScript has grown from a simple scripting language to a powerful,
    full-fledged programming language, and its awesomeness is evident in
    various aspects. In this article, we will explore why JavaScript is
    awesome and why it remains a popular choice for developers worldwide.`,
  },
  {
    title: "1. Ubiquity",
    content: `One of the key reasons for JavaScrip&apos;s awesomeness is its ubiquity.
    It&apos;s the only programming language that can run directly in web
    browsers, making it an essential tool for building dynamic and interactive
    web applications. Nearly every web browser supports JavaScript, which
    means that the vast majority of internet users have JavaScript enabled by
    default. This universality ensures that JavaScript is an indispensable
    language for web development.`,
  },
  {
    title: "2. Versatility",
    content: `JavaScript&apos;s versatility is another major factor in its awesomeness.
    It can be used for a wide range of applications, from client-side web
    development to server-side applications. With the introduction of
    technologies like Node.js, JavaScript can now be used to build fast and
    efficient server-side applications. This versatility allows developers to
    work with the same language throughout the entire web development stack,
    making it easier to manage and maintain their codebase.`,
  },
  {
    title: "3. Community and Ecosystem",
    content: `JavaScript boasts a massive and active community of developers. This
    community-driven ecosystem is continuously evolving, with new libraries,
    frameworks, and tools emerging regularly. Popular JavaScript libraries and
    frameworks like React, Angular, and Vue.js have streamlined web
    development and made it easier for developers to create feature-rich and
    responsive web applications.`,
  },
  {
    title: "4. Fast Development",
    content: `JavaScript is known for its rapid development capabilities. Its intuitive
    syntax and dynamic typing make it a language that is quick to learn and
    use. With JavaScript, developers can prototype and build web applications
    rapidly, reducing time-to-market for new projects. This speed of
    development makes JavaScript an ideal choice for startups and agile
    development teams.`,
  },
  {
    title: "5. Cross-Platform Compatibility",
    content: `In addition to web development, JavaScript can be used for cross-platform
    mobile app development. Technologies like React Native and NativeScript
    enable developers to create mobile applications for both iOS and Android
    using JavaScript, reducing the need to write separate codebases for each
    platform. This cross-platform compatibility saves time and resources,
    making JavaScript an awesome choice for mobile development as well.`,
  },
  {
    title: "6. Strong Asynchronous Capabilities",
    content: `JavaScrip&apos;s asynchronous programming model allows developers to build
    applications that can handle multiple tasks concurrently without blocking
    the main thread. This is crucial for creating responsive web applications
    that can fetch data, make network requests, or perform other
    time-consuming operations without freezing the user interface.
    Asynchronous programming in JavaScript is facilitated through Promises and
    the async/await syntax, making it a robust and powerful feature of the
    language.`,
  },
  {
    title: "7. Regular Updates and Improvements",
    content: `The JavaScript language specification, known as ECMAScript, is
    continuously evolving. New features and enhancements are added regularly
    to improve the language and make it even more powerful. This ensures that
    JavaScript remains a modern and relevant language for developing
    cutting-edge web applications.`,
  },
  {
    title: "Conclusion",
    content: `JavaScript&apos;s awesomeness lies in its ubiquity, versatility, strong
    community support, fast development capabilities, cross-platform
    compatibility, and its ability to handle asynchronous tasks efficiently.
    The continuous evolution of the language through regular updates keeps it
    relevant and competitive in the fast-paced world of web development. For
    both beginners and seasoned developers, JavaScript remains an essential
    and awesome programming language to master. Its prominence in the web
    development landscape is a testament to its enduring importance in the
    digital age.`,
  },
];

export const JsArticle: FC = () => (
  <>
    {sections.map((section, index) => (
      <Fragment key={index}>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          {section.title}
        </Typography>

        <Typography sx={{ marginBottom: 4, marginLeft: 6 }} lineHeight={1.8}>
          {section.content}
        </Typography>
      </Fragment>
    ))}
  </>
);
