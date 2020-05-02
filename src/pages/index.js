/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Avatar from '../images/avatar-stephane-klein.jpg';

const IndexPage = () => (
    <html>
        <head>
            <meta httpEquiv='content-type' content='text/html; charset=utf-8' />

            <title>Stéphane Klein, Software Craftsman, Table Tennis player</title>
        </head>
        <body
            css={css`
                background-color: white;

                font-family: Helvetica;
                font-size: 24pt;
                font-weight: bold;
                letter-spacing: -1px;

                a {
                    text-decoration: none;
                    color: #777;
                }

                article {
                    margin: 10% 20% 0 20%;
                }
            `}
        >
            <article
                css={css`
                    margin: 10% 20% 0 20%;
                `}
            >
                <img
                    src={Avatar}
                    css={css`
                        width: 20%;
                        float: left;
                        display: block;
                    `}
                />
                <div css={css`
                    margin-left: 20%;
                `}>
                    <p>I'm <a href='https://www.facebook.com/stephane.klein.moselle'>Stéphane Klein</a>, Software Craftsman, Table Tennis player.</p>

                    <p>I'm CTO at <a href='https://www.spacefill.fr/'>Spacefill</a>, and I write code for fun and profit.</p>

                    <p>Here's my <a href='http://cv.stephane-klein.info'>curriculum vitæ</a>.</p>

                    <p>I'm also on <a href='https://twitter.com/klein_stephane'>Twitter</a>, <a href='https://www.linkedin.com/in/stephanekleinfrommetz/'>LinkedIn</a>, <a href='https://www.reddit.com/user/sklein'>Reddit</a> and <a href='https://github.com/harobed'>GitHub</a>.</p>

                    <p><a href='https://joinlion.co/'>Lion</a> Alumni.</p>

                    <p>Email: <a href='mailto:contact@stephane-klein.info'>contact@stephane-klein.info</a></p>

                    <p>My <a href='https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator'>MBTI</a> Personnality Type: <a href='mbti.png'>ENFP</a></p>

                    <p>Some GitHub repositories by topics: <a href='https://github.com/search?utf8=%E2%9C%93&q=user%3Aharobed+topic%3Apoc&type=Repositories&ref=advsearch&l=&l=' title='Proof of concept'>poc</a>, <a href='https://github.com/search?utf8=%E2%9C%93&q=user%3Aharobed+topic%3Aansible&type=Repositories&ref=advsearch&l=&l='>Ansible</a>.</p>

                    <p>My public personnal notebook: <a href='https://github.com/harobed/personnal-notebook'>github.com/harobed/personnal-notebook</a></p>
                </div>
            </article>
        </body>
    </html>
);

export default IndexPage;
