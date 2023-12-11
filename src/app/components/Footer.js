import Link from "next/link"

export default function Footer(){
    return(
        <>
        <div className="flex space-x-[400px]">
        <footer className="footer p-4 bg-white text-white-content pl-[150px]">
  <aside>
   <div className="flex">
   <div>
        <img className="w-[70px] h-[70px]"
        src="https://www.ygfamily.com/images/common/logo_ygfamily.svg"></img>
    </div>
    <div className="text-[10px] pt-[20px] pl-[10px]">
    <p>Copyright YG Entertaiment All right reserved.</p>
    </div>
   </div>
  </aside>
  <div className="flex space-x-[20px]">
    <div>
        <Link href="/aboutyg">
        <b>•About YG</b>
        </Link>
    </div>
  </div>
  
</footer>
</div>
        
        </>
    )
}