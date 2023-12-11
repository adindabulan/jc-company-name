import Link from "next/link"




export default function Home(){
  return(
    <>
    <br/>
    
    
    <div className="px-[150px]">
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="/babymonster.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="/jennie.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/leesungkyung.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="/treasure.jpg" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">

    <a href="https://www.youtube.com/watch?v=EIz09kLzN9k" target="blank">
    <img src="https://www.ygfamily.com/upload/main/akmu_20230809_kr.jpg" className="w-full" />
    </a>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">.</a> 
  <a href="#item2" className="btn btn-xs">.</a> 
  <a href="#item3" className="btn btn-xs">.</a> 
  <a href="#item4" className="btn btn-xs">.</a>
  <a href="#item5" className="btn btn-xs">.</a>
</div>

<div>
        <div>
        </div> <br/>
          <img src="/2nd.png">
          </img>
      </div>
<div className="space-y-1">
  <div className=" pl-[10px] pt-[15px] bg-gray-100 w-[30%] h-[40px] text-[12px]">
    <b>MUSIC VIDEO</b>
    </div>
    <div className="bg-gray-100 w-[30%] h-[150px] pr-[3px] flex items-center justify-center">
      <div className="mr-[10px]">
      <a href="https://www.youtube.com/watch?v=EIz09kLzN9k" target="blank">
        <img 
          className="w-[150px] h-[90px]"
          src="/thumbnail-1.webp"/>
          </a>
      </div>

      <div className="text-[10px] underline underline-offset-1">
        <p>
       
            <Link href="https://youtu.be/btDd9rOlc2k?si=duV8YbXsOMfp6C4H">
            <b>LOVE LEE</b>
            </Link>
        </p>
        <p>
        <span>
            <Link href="https://youtu.be/btDd9rOlc2k?si=duV8YbXsOMfp6C4H">
            AKMU
            </Link>
            
          </span>
        </p>
      </div>
    </div>
  </div>
  
   
    </div>
    </>
  )
}