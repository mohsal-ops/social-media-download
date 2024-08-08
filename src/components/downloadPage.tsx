import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card';
import QualitiesTable from './ui/QualitiesTable';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';

// export interface Link {
//   quality: string 
//   link:string
// }
// export interface responceInterface {
//   links: Link[]
//   picture: string
//   title:string
// }
// type responseprop = {
//   response: responceInterface;
// };
export default function DownloadPage({ response }:  any ) {
    const qualities = response?.links
   
    const pic = response?.picture
  const caption = response?.title
  
  return (
    <div className="flex mx-3 flex-col mt-4 min-h-96">
      <div className="flex sm:gap-3 min-h-40 ">
        <div className="flex w-full sm:flex-row sm:justify-between flex-col p-4 items-center rounded-xl bg-slate-200 gap-3">
          <img src={pic} />
          <p className="font-semibold">{caption}</p>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="sm:text-md text-white hover:bg-neutral-800 focus:bg-neutral-800 bg-black">
                  Choose video quality
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <QualitiesTable qualities={qualities} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <Card>
          <CardTitle>Lorem ipsum dolor sit.</CardTitle>
          <CardDescription className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dolore delectus est quas eligendi saepe officiis perferendis
            assumenda quam aperiam.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum dolor sit.</CardTitle>
          <CardDescription className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dolore delectus est quas eligendi saepe officiis perferendis
            assumenda quam aperiam.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum dolor sit.</CardTitle>
          <CardDescription className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dolore delectus est quas eligendi saepe officiis perferendis
            assumenda quam aperiam.
          </CardDescription>
        </Card>
        <Card>
          <CardTitle>Lorem ipsum dolor sit.</CardTitle>
          <CardDescription className="text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dolore delectus est quas eligendi saepe officiis perferendis
            assumenda quam aperiam.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
