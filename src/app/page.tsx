'use client'

import DownloadPage from "@/components/downloadPage";
import fetchdata from "@/components/fetchdata";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DiGithubBadge } from "react-icons/di";
import { PiInstagramLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import { Bars } from "react-loader-spinner";



export default function Home() {
  const arr = ['Instagram','TikTok','Facebook','YouTube']
  const [socialPlatform, setsocialPlatform] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const [error, seterror] = useState<string|undefined>();
  const [response, setResponse] = useState()
  const [loading, setloading] = useState<boolean>(false)
  const [isSocialPlatform, setisSocialPlatform] = useState<boolean>();

  useEffect(() => {
    toast.success(`paste your ${socialPlatform} link`);
  },[socialPlatform])
  
  const handlesubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(isSocialPlatform)
    if (isSocialPlatform) {
      setloading(true)
      fetchdata({ link, socialPlatform }).then(({ result, status }) => {
        console.log("result", result);
        if (result) {
          if (status) {
            setResponse(result)
            setloading(false)

          } else {
            seterror(result.message)
            setloading(false)
          }
        }
      })
    } else {
      toast.error('choose a platform please')
      setisSocialPlatform(false)

    }
    
  }
  return (
    <main>
      {/* navbar */}
      <div className="flex px-5 items-center  sm:px-10 py-3 justify-between">
        <p className="sm:text-3xl text-2xl font-black">
          Five<span className="text-purple-600">tek</span>
        </p>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="sm:text-md"
                >
                  Choose a platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col text-center font-medium w-40">
                    {arr.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center h-12 items hover:bg-primary-foreground"
                      >
                        <NavigationMenuLink className="text-md w-full">
                          <div
                            className="hover:cursor-pointer"
                            onClick={() => {
                              setsocialPlatform(item);
                              setisSocialPlatform(true);
                            }}
                          >
                            {item}
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {/* main ection */}
      <div className=" flex flex-col items-center justify-center text-center py-12 bg-purple-600">
        <p className="text-5xl font-medium mb-4">Social Media Video Download</p>
        <p className="text-2xl font-semibold ">
          Without Watermark Fast & All devices
        </p>
        <p className="text-lg mb-8">made by mohammed ben salah</p>
        <form
          className="flex sm:flex-row w-full px-4 sm:w-auto mx-2 flex-col gap-2"
          onSubmit={handlesubmit}
        >
          <input
            placeholder="Paste link"
            className=" outline-none  w-full p-3 rounded-md md:w-[540px] sm:w-[340px] lg:w-[600px] "
            onChange={(e) => {
              setLink(encodeURIComponent(e.target.value));
            }}
          />
          <button
            className="flex text-white justify-center gap-2 hover:bg-neutral-900 hover:duration-300 font-medium p-3 bg-black rounded-md"
            type="submit"
          >
            <Download className="w-4" />
            Download
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        {loading ? (
          <div>
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="w-full">
            <DownloadPage response={response} />
          </div>
        )}
      </div>
      <div className=" flex text-white text-center bg-black mt-8 py-8  flex-col items-center justify-center gap-3 ">
        <p>&copy; 2024 MohSal Fivetek All rights reserverd</p>
        <p className="text-3xl flex gap-2">
          <a
            href="https://www.linkedin.com/in/mohammed-ben-salah-840a3227b/"
            className="hover:text-red-600 hover:duration-300"
          >
            <PiLinkedinLogoThin className="font-light " />
          </a>
          <a
            href="https://www.instagram.com/mohsall.codes/"
            className="hover:text-red-600 hover:duration-300"
          >
            <PiInstagramLogoThin className="font-light " />
          </a>
          <a
            href="https://github.com/mohsal-ops"
            className="hover:text-red-600 hover:duration-300"
          >
            <DiGithubBadge />
          </a>
        </p>
      </div>
    </main>
  );
}



