import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Map = () => {
  return (
    <Drawer>
      <DrawerTrigger className="text-sm">查看地圖</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <iframe
            className="w-full h-[400px]"
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB6ByNvZZN0bUPOxSNU-i43yGE940i7lfM&center=25.0330,121.5645&zoom=14&maptype=roadmap"
          ></iframe>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default Map;
