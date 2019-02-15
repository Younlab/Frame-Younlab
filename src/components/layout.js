import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import SideBar from "./container/sideBar";

import "./styles/layout.scss";
const menu = e => {
  const leftSideBar = document.querySelector(".layout-left-side-wrap");
  const rightSideContent = document.querySelector(".layout-right-side-wrap");
  const menuBtnArrow = document.querySelector(".layout-menu-btn-arrow");
  leftSideBar.classList.toggle("left-active");
  rightSideContent.classList.toggle("right-active");
  menuBtnArrow.classList.toggle("arrow-active");
};
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            subFirstTitle
            subLastTitle
            github
          }
        }
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <section className="layout-left-side-wrap">
          <aside className="layout-left-side-container">
            <SideBar
              data={data.allMarkdownRemark.group}
              title={data.site.siteMetadata}
              github={data.site.siteMetadata.github}
            />
          </aside>
        </section>
        <section className="layout-right-side-wrap">
          <div className="layout-menu-btn" onClick={e => menu(e)}>
            <div className="layout-menu-btn-arrow">▶</div>
          </div>
          <main className="container layout-content-wrap">{children}</main>
        </section>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
