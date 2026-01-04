import { Ruler } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const clothingSizes = [
  { size: "XS", bust: "31-32", waist: "24-25", hips: "34-35", eu: "34" },
  { size: "S", bust: "33-34", waist: "26-27", hips: "36-37", eu: "36" },
  { size: "M", bust: "35-36", waist: "28-29", hips: "38-39", eu: "38" },
  { size: "L", bust: "37-39", waist: "30-32", hips: "40-42", eu: "40" },
  { size: "XL", bust: "40-42", waist: "33-35", hips: "43-45", eu: "42" },
];

const menClothingSizes = [
  { size: "S", chest: "34-36", waist: "28-30", hips: "35-37", eu: "44-46" },
  { size: "M", chest: "38-40", waist: "32-34", hips: "38-40", eu: "48-50" },
  { size: "L", chest: "42-44", waist: "36-38", hips: "41-43", eu: "52-54" },
  { size: "XL", chest: "46-48", waist: "40-42", hips: "44-46", eu: "56-58" },
  { size: "XXL", chest: "50-52", waist: "44-46", hips: "47-49", eu: "60-62" },
];

const footwearSizes = [
  { us: "5", uk: "2.5", eu: "35", cm: "22" },
  { us: "6", uk: "3.5", eu: "36", cm: "23" },
  { us: "7", uk: "4.5", eu: "37", cm: "24" },
  { us: "8", uk: "5.5", eu: "38", cm: "25" },
  { us: "9", uk: "6.5", eu: "39", cm: "26" },
  { us: "10", uk: "7.5", eu: "40", cm: "27" },
  { us: "11", uk: "8.5", eu: "41", cm: "28" },
];

const menFootwearSizes = [
  { us: "7", uk: "6", eu: "40", cm: "25" },
  { us: "8", uk: "7", eu: "41", cm: "26" },
  { us: "9", uk: "8", eu: "42", cm: "27" },
  { us: "10", uk: "9", eu: "43", cm: "28" },
  { us: "11", uk: "10", eu: "44", cm: "29" },
  { us: "12", uk: "11", eu: "45", cm: "30" },
  { us: "13", uk: "12", eu: "46", cm: "31" },
];

interface SizeGuideModalProps {
  gender?: "women" | "men";
}

export const SizeGuideModal = ({ gender = "women" }: SizeGuideModalProps) => {
  const clothing = gender === "men" ? menClothingSizes : clothingSizes;
  const footwear = gender === "men" ? menFootwearSizes : footwearSizes;
  const chestLabel = gender === "men" ? "Chest" : "Bust";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline-offset-4 hover:underline">
          <Ruler className="h-4 w-4" />
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl tracking-tight">
            Size Guide
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="clothing" className="mt-6">
          <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto">
            <TabsTrigger
              value="clothing"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-xs tracking-wider uppercase"
            >
              Clothing
            </TabsTrigger>
            <TabsTrigger
              value="footwear"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3 text-xs tracking-wider uppercase"
            >
              Footwear
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clothing" className="mt-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wider uppercase">
                  {gender === "men" ? "Men's" : "Women's"} Clothing (inches)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Size</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">{chestLabel}</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Waist</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Hips</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">EU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clothing.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                          <td className="py-3 px-4 font-medium">{row.size}</td>
                          <td className="py-3 px-4 text-muted-foreground">{"bust" in row ? row.bust : row.chest}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.waist}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.hips}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.eu}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-3">How to Measure</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">{chestLabel}:</strong> Measure around the fullest part of your {gender === "men" ? "chest" : "bust"}</li>
                  <li><strong className="text-foreground">Waist:</strong> Measure around your natural waistline</li>
                  <li><strong className="text-foreground">Hips:</strong> Measure around the fullest part of your hips</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="footwear" className="mt-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-4 tracking-wider uppercase">
                  {gender === "men" ? "Men's" : "Women's"} Footwear
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">US</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">UK</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">EU</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {footwear.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                          <td className="py-3 px-4 font-medium">{row.us}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.uk}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.eu}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-3">How to Measure Your Foot</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Place a piece of paper on the floor against a wall</li>
                  <li>2. Stand on the paper with your heel against the wall</li>
                  <li>3. Mark the tip of your longest toe on the paper</li>
                  <li>4. Measure the distance from the wall to the mark in centimeters</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> If you're between sizes, we recommend sizing up for comfort.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
