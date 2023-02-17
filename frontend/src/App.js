import Card from "./compoents/Card"
import Header from "./compoents/Header";

function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div style={{ display: 'none' }} className="overlay">
                <div className="drawer">
                    <div className="drawerTitle">
                        <h2>Корзина</h2>
                        <span>x</span>
                    </div>
                    <div className="items">
                        <div className="item">
                            <img width={70} height={70} src="/img/blazer_mid_suede_g.png" alt=""/>
                            <div className="itemContent">
                                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="itemBtn">x</button>
                        </div>
                        <div className="item">
                            <img width={70} height={70} src="/img/air_max_270.png" alt=""/>
                            <div className="itemContent">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="itemBtn">x</button>
                        </div>
                    </div>
                    <ul className="finalPrice">
                        <li>
                            <p>Итого</p>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <p>Налог 5%</p>
                            <div></div>
                            <b>2000 руб.</b>
                        </li>
                        <button>Оформить заказ
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></button>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="contentTitle">
                    <h1>Все кроссовки</h1>
                    <div className="search">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    <Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999 р.'}
                          pic_ulr={'/img/blazer_mid_suede_g.png'}/>
                    <Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999 р.'}
                          pic_ulr={'/img/blazer_mid_suede_g.png'}/>
                    <Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999 р.'}
                          pic_ulr={'/img/blazer_mid_suede_g.png'}/>
                    <Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999 р.'}
                          pic_ulr={'/img/blazer_mid_suede_g.png'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
