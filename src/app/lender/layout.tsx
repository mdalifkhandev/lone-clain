import Sidebar from "@/components/lenderDashbord/sidebar/Sidebar";


const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='bg-gray-100'>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;