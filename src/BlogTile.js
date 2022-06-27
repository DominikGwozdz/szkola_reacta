import style from "./style";

function BlogTile({title, intro}) {
    return (
        <div style={style.news}>
            <h1 style={style.h1}>{title}</h1>
            <p style={style.p}>{cutText(intro)}</p>
        </div>
    );
}

function cutText(intro) {
    if (intro.length > 25) {
        return `${intro.slice(0, 25)}...`;
    }
    return intro;
}

export default BlogTile;
