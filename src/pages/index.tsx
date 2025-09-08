import React from "react";

import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";

const IndexPage: React.FC = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={title} description={subtitle}>
      <Sidebar />
      <Page>
        <h2>Hi, I'm Avaye Dawadi!</h2>
        <p>I'm a computer science major at the <strong>Georgia Institute of Technology</strong>. I'm interested in startups, AI native products, and software engineering overall.</p>
        <p>I'm a 4th year who worked at <strong>Ramp</strong> this past summer, and I have a special interest in the ability of startups to work at high velocity to do amazing things.</p>
        <p>Recently, I've been super interested in <strong>on-device LLMs</strong> and the ability to use them to do amazing things, with privacy.</p>
        <p>I'm always <strong>tinkering</strong> on something and love to see what others are doing too.</p>
        <p>Email me at <strong>avaye [dot] dawadi [at] gmail [dot] com</strong> if you want to chat!</p>
      </Page>
    </Layout>
  );
};

export default IndexPage;


