import Sidebar from "@/components/lenderDashbord/sidebar/Sidebar";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='bg-white'>
            <div>
                <Sidebar/>
                {children}
            </div>
        </div>
    );
};

export default layout;