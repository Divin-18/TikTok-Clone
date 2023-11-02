"use client"

import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";

export default function Home() {


  return (
    <MainLayout>
      <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
        <ClientOnly>
          <PostMain
            post={{
              id: '123',
              user_id: '456',
              video_url: "tiktok-clone/public/183271 (720p).mp4",
              text: "this is some text",
              created_at: 'data here',
              profile: {
                user_id: '456',
                name: 'User 1',
                image: "http://placehold.co/100",
              },
            }}
          />
        </ClientOnly>
      </div>
    </MainLayout>
  );
}
