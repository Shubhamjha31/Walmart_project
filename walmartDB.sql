--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2025-07-09 23:02:45

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 16639)
-- Name: batch; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batch (
    batch_id integer NOT NULL,
    product_id integer,
    arr_date date,
    quantity integer,
    expiry_date date
);


ALTER TABLE public.batch OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16638)
-- Name: batch_batch_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batch_batch_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.batch_batch_id_seq OWNER TO postgres;

--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 222
-- Name: batch_batch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batch_batch_id_seq OWNED BY public.batch.batch_id;


--
-- TOC entry 219 (class 1259 OID 16613)
-- Name: forcast; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forcast (
    forcast_id integer NOT NULL,
    product_id integer,
    gen_date date,
    value integer
);


ALTER TABLE public.forcast OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16612)
-- Name: forcast_forcast_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forcast_forcast_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.forcast_forcast_id_seq OWNER TO postgres;

--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 218
-- Name: forcast_forcast_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forcast_forcast_id_seq OWNED BY public.forcast.forcast_id;


--
-- TOC entry 215 (class 1259 OID 16590)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    name text,
    category text,
    in_stock integer
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16589)
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 214
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;


--
-- TOC entry 217 (class 1259 OID 16601)
-- Name: sales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sales (
    sale_id integer NOT NULL,
    product_id integer,
    sale_date date,
    units_sold integer
);


ALTER TABLE public.sales OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16600)
-- Name: sales_sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sales_sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sales_sale_id_seq OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 216
-- Name: sales_sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sales_sale_id_seq OWNED BY public.sales.sale_id;


--
-- TOC entry 225 (class 1259 OID 16651)
-- Name: status_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status_table (
    batch_id integer NOT NULL,
    product_id integer,
    status_date date,
    status text,
    quantity integer
);


ALTER TABLE public.status_table OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16650)
-- Name: status_table_batch_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.status_table_batch_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.status_table_batch_id_seq OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 224
-- Name: status_table_batch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.status_table_batch_id_seq OWNED BY public.status_table.batch_id;


--
-- TOC entry 221 (class 1259 OID 16625)
-- Name: trends; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trends (
    trend_id integer NOT NULL,
    product_id integer,
    product_name text,
    gen_date date,
    value integer
);


ALTER TABLE public.trends OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16624)
-- Name: trends_trend_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trends_trend_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trends_trend_id_seq OWNER TO postgres;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 220
-- Name: trends_trend_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trends_trend_id_seq OWNED BY public.trends.trend_id;


--
-- TOC entry 227 (class 1259 OID 16665)
-- Name: user_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_table (
    user_id integer NOT NULL,
    email_id text NOT NULL,
    backup_email text NOT NULL,
    password text,
    role text
);


ALTER TABLE public.user_table OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16664)
-- Name: user_table_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_table_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_table_user_id_seq OWNER TO postgres;

--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 226
-- Name: user_table_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_table_user_id_seq OWNED BY public.user_table.user_id;


--
-- TOC entry 3207 (class 2604 OID 16642)
-- Name: batch batch_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch ALTER COLUMN batch_id SET DEFAULT nextval('public.batch_batch_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 16616)
-- Name: forcast forcast_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forcast ALTER COLUMN forcast_id SET DEFAULT nextval('public.forcast_forcast_id_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 16593)
-- Name: products product_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- TOC entry 3204 (class 2604 OID 16604)
-- Name: sales sale_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales ALTER COLUMN sale_id SET DEFAULT nextval('public.sales_sale_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 16654)
-- Name: status_table batch_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_table ALTER COLUMN batch_id SET DEFAULT nextval('public.status_table_batch_id_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 16628)
-- Name: trends trend_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends ALTER COLUMN trend_id SET DEFAULT nextval('public.trends_trend_id_seq'::regclass);


--
-- TOC entry 3209 (class 2604 OID 16668)
-- Name: user_table user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_table ALTER COLUMN user_id SET DEFAULT nextval('public.user_table_user_id_seq'::regclass);


--
-- TOC entry 3382 (class 0 OID 16639)
-- Dependencies: 223
-- Data for Name: batch; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.batch (batch_id, product_id, arr_date, quantity, expiry_date) FROM stdin;
\.


--
-- TOC entry 3378 (class 0 OID 16613)
-- Dependencies: 219
-- Data for Name: forcast; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forcast (forcast_id, product_id, gen_date, value) FROM stdin;
\.


--
-- TOC entry 3374 (class 0 OID 16590)
-- Dependencies: 215
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (product_id, name, category, in_stock) FROM stdin;
\.


--
-- TOC entry 3376 (class 0 OID 16601)
-- Dependencies: 217
-- Data for Name: sales; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sales (sale_id, product_id, sale_date, units_sold) FROM stdin;
\.


--
-- TOC entry 3384 (class 0 OID 16651)
-- Dependencies: 225
-- Data for Name: status_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status_table (batch_id, product_id, status_date, status, quantity) FROM stdin;
\.


--
-- TOC entry 3380 (class 0 OID 16625)
-- Dependencies: 221
-- Data for Name: trends; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trends (trend_id, product_id, product_name, gen_date, value) FROM stdin;
\.


--
-- TOC entry 3386 (class 0 OID 16665)
-- Dependencies: 227
-- Data for Name: user_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_table (user_id, email_id, backup_email, password, role) FROM stdin;
\.


--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 222
-- Name: batch_batch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.batch_batch_id_seq', 1, false);


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 218
-- Name: forcast_forcast_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forcast_forcast_id_seq', 1, false);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 214
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 1, false);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 216
-- Name: sales_sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sales_sale_id_seq', 1, false);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 224
-- Name: status_table_batch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.status_table_batch_id_seq', 1, false);


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 220
-- Name: trends_trend_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trends_trend_id_seq', 1, false);


--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 226
-- Name: user_table_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_table_user_id_seq', 1, false);


--
-- TOC entry 3221 (class 2606 OID 16644)
-- Name: batch batch_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch
    ADD CONSTRAINT batch_pkey PRIMARY KEY (batch_id);


--
-- TOC entry 3217 (class 2606 OID 16618)
-- Name: forcast forcast_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forcast
    ADD CONSTRAINT forcast_pkey PRIMARY KEY (forcast_id);


--
-- TOC entry 3211 (class 2606 OID 16599)
-- Name: products products_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);


--
-- TOC entry 3213 (class 2606 OID 16597)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 3215 (class 2606 OID 16606)
-- Name: sales sales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (sale_id);


--
-- TOC entry 3223 (class 2606 OID 16658)
-- Name: status_table status_table_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_table
    ADD CONSTRAINT status_table_pkey PRIMARY KEY (batch_id);


--
-- TOC entry 3219 (class 2606 OID 16632)
-- Name: trends trends_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_pkey PRIMARY KEY (trend_id);


--
-- TOC entry 3225 (class 2606 OID 16672)
-- Name: user_table user_table_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_table
    ADD CONSTRAINT user_table_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3229 (class 2606 OID 16645)
-- Name: batch batch_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batch
    ADD CONSTRAINT batch_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3227 (class 2606 OID 16619)
-- Name: forcast forcast_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forcast
    ADD CONSTRAINT forcast_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3226 (class 2606 OID 16607)
-- Name: sales sales_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3230 (class 2606 OID 16659)
-- Name: status_table status_table_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_table
    ADD CONSTRAINT status_table_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


--
-- TOC entry 3228 (class 2606 OID 16633)
-- Name: trends trends_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trends
    ADD CONSTRAINT trends_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);


-- Completed on 2025-07-09 23:02:46

--
-- PostgreSQL database dump complete
--

