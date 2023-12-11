import Link from "next/link";


export default function Navbar(){
    return(
        <>
            <div className="navbar bg-base space-x-[340px]">
                <div className="pl-[150px]">
                    <Link href="/">
                    <img className=" w-[150px] h-[75px]" src="https://www.ygfamily.com/images/common/logo_ygfamily.svg"/>
                    </Link>
            </div>
            <div className="gap-6 pr-[50] ">
                <div>
                    <Link href="/aboutyg">
                        <b>
                            ABOUT YG
                        </b>
                    </Link>
                </div>
                <div>
                <Link href="/artists">
                        <b>
                            ARTIST
                        </b>
                </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/yg_ent_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
                    <b>
                    MULTIMEDIA
                    </b>
                    </Link>
                </div>
                <div>
                    <Link href="https://ygselect.com/">
                    <b>
                   SELECT
                    </b>
                    </Link>
                </div>

            </div>
            
             
            </div>
        </>
    )
}