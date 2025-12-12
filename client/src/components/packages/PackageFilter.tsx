import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface FilterProps {
  onSearchChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  onDurationChange: (value: string) => void;
  onSortChange: (value: string) => void;
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
}

export default function PackageFilter({
  onSearchChange,
  onRegionChange,
  onDurationChange,
  onSortChange,
  priceRange,
  onPriceChange,
}: FilterProps) {
  return (
    <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border border-border/50 shadow-sm rounded-xl p-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Search */}
        <div className="lg:col-span-1">
          <Label htmlFor="search" className="text-xs font-medium mb-1.5 block text-muted-foreground">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search packages..."
              className="pl-9 bg-white"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <Label className="text-xs font-medium mb-1.5 block text-muted-foreground">Region</Label>
          <Select onValueChange={onRegionChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="Manali">Manali</SelectItem>
              <SelectItem value="Shimla">Shimla</SelectItem>
              <SelectItem value="Dharamshala">Dharamshala</SelectItem>
              <SelectItem value="Spiti">Spiti Valley</SelectItem>
              <SelectItem value="Kasol">Kasol</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Duration Filter */}
        <div>
          <Label className="text-xs font-medium mb-1.5 block text-muted-foreground">Duration</Label>
          <Select onValueChange={onDurationChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Any Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Duration</SelectItem>
              <SelectItem value="short">Short (1-3 Days)</SelectItem>
              <SelectItem value="medium">Medium (4-6 Days)</SelectItem>
              <SelectItem value="long">Long (7+ Days)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <Label className="text-xs font-medium mb-1.5 block text-muted-foreground">Sort By</Label>
          <Select onValueChange={onSortChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popularity</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="duration_short">Duration: Shortest</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Price Range Slider (Simplified for this UI) */}
        <div className="hidden lg:block">
           <Label className="text-xs font-medium mb-1.5 block text-muted-foreground">
             Max Price: ₹{priceRange[0]}
           </Label>
           <Slider 
             defaultValue={[50000]} 
             max={50000} 
             step={1000}
             value={priceRange}
             onValueChange={onPriceChange}
             className="mt-3"
           />
        </div>
      </div>
    </div>
  );
}
