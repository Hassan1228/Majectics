import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSeven from "@/components/MainFooter/FooterSeven";

import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import { seo } from "@/data/sidebarPageContainer";
import React from "react";

const Seo = () => {
  return (
    <Layout pageTitle="Video Animation">
      <Style
            font="Rubik, sans-serif"
            bFont="Rubik, sans-serif"
            black="#2a2833"
            text="#74727a"
            base="#ff4b82"
            baseRgb="255, 75, 130"
            scrollToTopColor="#fff"
            blackRgb="42, 40, 51"  />
      <HeaderTwo  headerStyle="mainmenu-seven" header={7} />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Video Animation"
        parent="Services"
        parentHref="/services"
      />
      <SidebarPageContainer service={seo} />
      <CallToSectionTwo className="alternate" />
      <FooterSeven />
    </Layout>
  );
};

export default Seo;
