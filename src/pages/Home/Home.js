import CategorySlider from '~/components/CategorySlider';
import VerticalVideo from '~/components/VerticalVideo';
import GridStyles from '~/components/GridStyles';
import messiImg from '~/assets/images/video/hq720.jpg';
import camBongDa from '~/assets/images/channel/cambongda.jpg';

const Home = () => {
    const DATA_VIDEO = [
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
        {
            thumbnail: messiImg,
            title: 'NHÌN LẠI 2022 CỦA LIONEL MESSI: TRỌN VẸN!',
            time: '12:54',
            channelAvatar: camBongDa,
            channelName: 'Cảm Bóng Đá',
            tick: true,
            view: '66K',
            publishAt: '1 day ago',
        },
    ];

    return (
        <>
            <GridStyles>
                <CategorySlider />

                {DATA_VIDEO && DATA_VIDEO.length > 0 && (
                    <div className="row sm-gutter" style={{ marginTop: 24 }}>
                        {DATA_VIDEO.map((item, index) => (
                            <div key={index} className="col l-3">
                                <VerticalVideo data={item} />
                            </div>
                        ))}
                    </div>
                )}
            </GridStyles>
        </>
    );
};

export default Home;
