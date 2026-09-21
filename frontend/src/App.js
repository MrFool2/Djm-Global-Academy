import Router from "./Router";
import Masonry from './components/Acativity/MasonryGallery';

const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=WdUjooYs&id=3D1AADE7D97048784BB978988151AD12E2EF5CC8&thid=OIP.WdUjooYsGw5I04qYSIKkswHaHa&mediaurl=https%3a%2f%2fcdnb.artstation.com%2fp%2fmarketplace%2fpresentation_assets%2f003%2f430%2f265%2flarge%2ffile.jpg%3f1706950304&exph=1024&expw=1024&q=image+&FORM=IRPRST&ck=A65896F96872199E8B61DB185FAA6FF7&selectedIndex=2&itb=0",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=%2fvFhp4Pl&id=7D57B3C6B4F9DDA4C239BA5E3503A5A08B8F8F03&thid=OIP._vFhp4PlmDjOzFomMKxSwgHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fthumbnails%2f023%2f009%2f485%2fsmall_2x%2fabstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg&exph=700&expw=1050&q=image+&FORM=IRPRST&ck=5C84D7A8D3B6E8864167E5ECCD2FDD1B&selectedIndex=6&itb=0",
      url: "",
      height: 600,
    },
    {
      id: "4",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=WF2ASOBP&id=3D1AADE7D97048784BB9914C687DC9CDC3C6C51A&thid=OIP.WF2ASOBPwpq9r1CxEHdxcgHaHa&mediaurl=https%3a%2f%2fcdna.artstation.com%2fp%2fmarketplace%2fpresentation_assets%2f003%2f430%2f262%2flarge%2ffile.jpg%3f1706950301&exph=1024&expw=1024&q=image+&FORM=IRPRST&ck=B24AE45B056B4578D0B23164BDD4414A&selectedIndex=7&itb=0",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=%2fvFhp4Pl&id=7D57B3C6B4F9DDA4C239BA5E3503A5A08B8F8F03&thid=OIP._vFhp4PlmDjOzFomMKxSwgHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fthumbnails%2f023%2f009%2f485%2fsmall_2x%2fabstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg&exph=700&expw=1050&q=image+&FORM=IRPRST&ck=5C84D7A8D3B6E8864167E5ECCD2FDD1B&selectedIndex=6&itb=0",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=KOOipupW&id=4874BF5933465A7E6AA34970907056C6627B79F3&thid=OIP.KOOipupW_5_J2Yv5CgFH6wHaEK&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f14960246%2fpexels-photo-14960246.jpeg%3fcs%3dsrgb%26dl%3dpexels-less-rock-14960246.jpg%26fm%3djpg&exph=3203&expw=5706&q=image+&FORM=IRPRST&ck=5664E354CB60D1D2A99204634003E07F&selectedIndex=19&itb=0",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=C2jx84%2b6&id=2A3C797F20DBFC907121AB6C2F1D74D58EFAC606&thid=OIP.C2jx84-6xaPAth9E4dkzGAHaHa&mediaurl=https%3a%2f%2fbinaryfork.com%2fwp-content%2fuploads%2f2022%2f09%2fmidjourney-the-beginning-of-a-parallel-universe.jpg&exph=1024&expw=1024&q=image+&FORM=IRPRST&ck=2E40552C03E4D14F0913FB112AE80157&selectedIndex=53&itb=0",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "8",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=rQUzWu3E&id=8C9028A2DE0985DFCA0AEA4B860C52B4DEBA33EB&thid=OIP.rQUzWu3E1IWid7NXvGfjGgHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f3d%2fa7%2fa1%2f3da7a11be8bc9b0d08e2098fdd3a5f29.jpg&exph=1024&expw=1024&q=image+&FORM=IRPRST&ck=AC6D4E355B1976B91BD2C267E0F84C22&selectedIndex=29&itb=0",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "9",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=N1ypSFEw&id=7FDE5019B49ECDFC218F43A78C59296C21810CA4&thid=OIP.N1ypSFEwnHX1ckTKI9_ebgHaEK&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f410000%2fvelka%2fimage-1628143923vd9.jpg&exph=1079&expw=1920&q=image+&FORM=IRPRST&ck=7D2EC2FD3F15D4CB033AA58FCC524C4C&selectedIndex=39&itb=0",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "10",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=%2bOPlR%2feR&id=4C59F49F39FE9340995DA032800800EFF66B44E7&thid=OIP.-OPlR_eRVYNy5IbdXCW5rwHaDt&mediaurl=https%3a%2f%2fwww.powertrafic.fr%2fwp-content%2fuploads%2f2023%2f04%2fimage-ia-exemple.png&exph=570&expw=1140&q=image+&FORM=IRPRST&ck=3606DC55FE18F876F8DAC14C34CAA665&selectedIndex=58&itb=0",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "11",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=WdUjooYs&id=3D1AADE7D97048784BB978988151AD12E2EF5CC8&thid=OIP.WdUjooYsGw5I04qYSIKkswHaHa&mediaurl=https%3a%2f%2fcdnb.artstation.com%2fp%2fmarketplace%2fpresentation_assets%2f003%2f430%2f265%2flarge%2ffile.jpg%3f1706950304&exph=1024&expw=1024&q=image+&FORM=IRPRST&ck=A65896F96872199E8B61DB185FAA6FF7&selectedIndex=2&itb=0",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "12",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=%2bOJ68xkM&id=DCF1D5322CA4CB131285D6F239C67D95575DDEFF&thid=OIP.-OJ68xkM2tEZ7KBgFtOWZAAAAA&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f410000%2fnahled%2fimage-1628146321WCl.jpg&exph=615&expw=461&q=image+&FORM=IRPRST&ck=2C06B972CB477A152BDE3594393E1CBA&selectedIndex=75&itb=0",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "13",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=gqlTuDRh&id=D2C0CE09B854FF8E8C83786C447B18B79F6090AE&thid=OIP.gqlTuDRhJD79CYlVeOAvZwHaEK&mediaurl=https%3a%2f%2fabstractstockphotos.com%2fwp-content%2fuploads%2fAbstractStockPhotos_0002005-900x506.jpg&exph=506&expw=900&q=image+&FORM=IRPRST&ck=259168B70A72E6FE3578F5EE5A14578E&selectedIndex=94&itb=0",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "14",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=LFAZeMtT&id=901F093D4F7A6796E860D11A33CA218A981245DE&thid=OIP.LFAZeMtTrpmgxHepopPuugHaEK&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f410000%2fvelka%2fimage-1628143682off.jpg&exph=1079&expw=1920&q=image+&FORM=IRPRST&ck=C172D00D84B04CE5257BEBC31989A283&selectedIndex=96&itb=0",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "15",
      img: "https://www.bing.com/images/search?view=detailV2&ccid=rI5YF56T&id=74FEE8F10C0D6AA1CEFA9444737CCECF58A672FB&thid=OIP.rI5YF56Tz0ShXGhMw3ezbgHaJM&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f2f%2f05%2faa%2f2f05aa1947fb6f9c97b54e729052a1b2.jpg&exph=1341&expw=1080&q=image+&FORM=IRPRST&ck=F701E5FAAC892A2D3E669A01D616103B&selectedIndex=124&itb=0",

      url: "https://www.bing.com/images/search?view=detailV2&ccid=rI5YF56T&id=74FEE8F10C0D6AA1CEFA9444737CCECF58A672FB&thid=OIP.rI5YF56Tz0ShXGhMw3ezbgHaJM&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f2f%2f05%2faa%2f2f05aa1947fb6f9c97b54e729052a1b2.jpg&exph=1341&expw=1080&q=image+&FORM=IRPRST&ck=F701E5FAAC892A2D3E669A01D616103B&selectedIndex=124&itb=0",
      height: 600,
    },
    // ... more items
];



function App() {
  return (
    <div className="App">
      <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
    </div>
  );
}


export default App;
