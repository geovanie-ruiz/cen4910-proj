PGDMP                  	    {        	   skywalker    16.0    16.0 ]    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17391 	   skywalker    DATABASE     k   CREATE DATABASE skywalker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE skywalker;
                postgres    false                        3079    17392 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    17403    action    TABLE     �  CREATE TABLE public.action (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    choice_id smallint NOT NULL,
    label character varying NOT NULL,
    alignment character varying,
    next smallint,
    score smallint,
    pass smallint,
    fail smallint,
    "challengeId" integer,
    personal_choice_label character varying DEFAULT ''::character varying NOT NULL,
    others_choice_label character varying DEFAULT ''::character varying NOT NULL,
    personal_fail character varying DEFAULT ''::character varying NOT NULL,
    personal_success character varying DEFAULT ''::character varying NOT NULL,
    others_fail character varying DEFAULT ''::character varying NOT NULL,
    others_success character varying DEFAULT ''::character varying NOT NULL
);
    DROP TABLE public.action;
       public         heap    postgres    false    2            �            1259    17411    action_id_seq    SEQUENCE     �   CREATE SEQUENCE public.action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.action_id_seq;
       public          postgres    false    216            �           0    0    action_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.action_id_seq OWNED BY public.action.id;
          public          postgres    false    217            �            1259    17412    campaign    TABLE     >  CREATE TABLE public.campaign (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    epilogue jsonb NOT NULL
);
    DROP TABLE public.campaign;
       public         heap    postgres    false    2            �            1259    17420    campaign_id_seq    SEQUENCE     �   CREATE SEQUENCE public.campaign_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.campaign_id_seq;
       public          postgres    false    218            �           0    0    campaign_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.campaign_id_seq OWNED BY public.campaign.id;
          public          postgres    false    219            �            1259    17421 	   challenge    TABLE     `  CREATE TABLE public.challenge (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    text character varying NOT NULL,
    type character varying NOT NULL,
    "contentId" integer
);
    DROP TABLE public.challenge;
       public         heap    postgres    false    2            �            1259    17429    challenge_id_seq    SEQUENCE     �   CREATE SEQUENCE public.challenge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.challenge_id_seq;
       public          postgres    false    220            �           0    0    challenge_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.challenge_id_seq OWNED BY public.challenge.id;
          public          postgres    false    221            �            1259    17430 	   character    TABLE     �  CREATE TABLE public."character" (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    class character varying NOT NULL,
    strength smallint NOT NULL,
    intelligence smallint NOT NULL,
    luck smallint NOT NULL,
    "bioUrl" character varying NOT NULL
);
    DROP TABLE public."character";
       public         heap    postgres    false    2            �            1259    17438    character_id_seq    SEQUENCE     �   CREATE SEQUENCE public.character_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.character_id_seq;
       public          postgres    false    222            �           0    0    character_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.character_id_seq OWNED BY public."character".id;
          public          postgres    false    223            �            1259    17605    choice    TABLE     �  CREATE TABLE public.choice (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    campaign_id smallint NOT NULL,
    sequence_id smallint NOT NULL,
    character_id smallint NOT NULL,
    choice_made_id smallint NOT NULL,
    is_success boolean
);
    DROP TABLE public.choice;
       public         heap    postgres    false    2            �            1259    17604    choice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.choice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.choice_id_seq;
       public          postgres    false    235            �           0    0    choice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.choice_id_seq OWNED BY public.choice.id;
          public          postgres    false    234            �            1259    17439    content    TABLE     a  CREATE TABLE public.content (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    exposition character varying,
    next smallint,
    "challengeId" integer,
    "viewId" integer
);
    DROP TABLE public.content;
       public         heap    postgres    false    2            �            1259    17447    content_id_seq    SEQUENCE     �   CREATE SEQUENCE public.content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.content_id_seq;
       public          postgres    false    224            �           0    0    content_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.content_id_seq OWNED BY public.content.id;
          public          postgres    false    225            �            1259    17448    refresh_token    TABLE     P  CREATE TABLE public.refresh_token (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    username character varying NOT NULL,
    token character varying NOT NULL
);
 !   DROP TABLE public.refresh_token;
       public         heap    postgres    false    2            �            1259    17456    refresh_token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.refresh_token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.refresh_token_id_seq;
       public          postgres    false    226            �           0    0    refresh_token_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.refresh_token_id_seq OWNED BY public.refresh_token.id;
          public          postgres    false    227            �            1259    17457    user    TABLE     r  CREATE TABLE public."user" (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    2            �            1259    17465    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    228            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    229            �            1259    17584 	   user_save    TABLE     �  CREATE TABLE public.user_save (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    filename character varying NOT NULL,
    campaign_id smallint NOT NULL,
    character_id smallint NOT NULL,
    last_sequence_id smallint NOT NULL,
    "userId" integer
);
    DROP TABLE public.user_save;
       public         heap    postgres    false    2            �            1259    17583    user_save_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_save_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_save_id_seq;
       public          postgres    false    233            �           0    0    user_save_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_save_id_seq OWNED BY public.user_save.id;
          public          postgres    false    232            �            1259    17475    view    TABLE     {  CREATE TABLE public.view (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    sequence_id smallint NOT NULL,
    content_type character varying NOT NULL,
    "contentId" integer,
    "campaignId" integer
);
    DROP TABLE public.view;
       public         heap    postgres    false    2            �            1259    17483    view_id_seq    SEQUENCE     �   CREATE SEQUENCE public.view_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.view_id_seq;
       public          postgres    false    230            �           0    0    view_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.view_id_seq OWNED BY public.view.id;
          public          postgres    false    231            �           2604    17484 	   action id    DEFAULT     f   ALTER TABLE ONLY public.action ALTER COLUMN id SET DEFAULT nextval('public.action_id_seq'::regclass);
 8   ALTER TABLE public.action ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    17485    campaign id    DEFAULT     j   ALTER TABLE ONLY public.campaign ALTER COLUMN id SET DEFAULT nextval('public.campaign_id_seq'::regclass);
 :   ALTER TABLE public.campaign ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    17486    challenge id    DEFAULT     l   ALTER TABLE ONLY public.challenge ALTER COLUMN id SET DEFAULT nextval('public.challenge_id_seq'::regclass);
 ;   ALTER TABLE public.challenge ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            �           2604    17487    character id    DEFAULT     n   ALTER TABLE ONLY public."character" ALTER COLUMN id SET DEFAULT nextval('public.character_id_seq'::regclass);
 =   ALTER TABLE public."character" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    17608 	   choice id    DEFAULT     f   ALTER TABLE ONLY public.choice ALTER COLUMN id SET DEFAULT nextval('public.choice_id_seq'::regclass);
 8   ALTER TABLE public.choice ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234    235            �           2604    17488 
   content id    DEFAULT     h   ALTER TABLE ONLY public.content ALTER COLUMN id SET DEFAULT nextval('public.content_id_seq'::regclass);
 9   ALTER TABLE public.content ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    17489    refresh_token id    DEFAULT     t   ALTER TABLE ONLY public.refresh_token ALTER COLUMN id SET DEFAULT nextval('public.refresh_token_id_seq'::regclass);
 ?   ALTER TABLE public.refresh_token ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            �           2604    17490    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            �           2604    17587    user_save id    DEFAULT     l   ALTER TABLE ONLY public.user_save ALTER COLUMN id SET DEFAULT nextval('public.user_save_id_seq'::regclass);
 ;   ALTER TABLE public.user_save ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    17492    view id    DEFAULT     b   ALTER TABLE ONLY public.view ALTER COLUMN id SET DEFAULT nextval('public.view_id_seq'::regclass);
 6   ALTER TABLE public.view ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230            �          0    17403    action 
   TABLE DATA           �   COPY public.action (id, uuid, "createdAt", "updatedAt", choice_id, label, alignment, next, score, pass, fail, "challengeId", personal_choice_label, others_choice_label, personal_fail, personal_success, others_fail, others_success) FROM stdin;
    public          postgres    false    216   ~w       �          0    17412    campaign 
   TABLE DATA           V   COPY public.campaign (id, uuid, "createdAt", "updatedAt", name, epilogue) FROM stdin;
    public          postgres    false    218   l|       �          0    17421 	   challenge 
   TABLE DATA           `   COPY public.challenge (id, uuid, "createdAt", "updatedAt", text, type, "contentId") FROM stdin;
    public          postgres    false    220   m}       �          0    17430 	   character 
   TABLE DATA           ~   COPY public."character" (id, uuid, "createdAt", "updatedAt", name, class, strength, intelligence, luck, "bioUrl") FROM stdin;
    public          postgres    false    222   �~       �          0    17605    choice 
   TABLE DATA           �   COPY public.choice (id, uuid, "createdAt", "updatedAt", campaign_id, sequence_id, character_id, choice_made_id, is_success) FROM stdin;
    public          postgres    false    235   �       �          0    17439    content 
   TABLE DATA           p   COPY public.content (id, uuid, "createdAt", "updatedAt", exposition, next, "challengeId", "viewId") FROM stdin;
    public          postgres    false    224   �       �          0    17448    refresh_token 
   TABLE DATA           \   COPY public.refresh_token (id, uuid, "createdAt", "updatedAt", username, token) FROM stdin;
    public          postgres    false    226   ̈       �          0    17457    user 
   TABLE DATA           _   COPY public."user" (id, uuid, "createdAt", "updatedAt", username, password, email) FROM stdin;
    public          postgres    false    228   ��       �          0    17584 	   user_save 
   TABLE DATA           �   COPY public.user_save (id, uuid, "createdAt", "updatedAt", filename, campaign_id, character_id, last_sequence_id, "userId") FROM stdin;
    public          postgres    false    233   ˊ       �          0    17475    view 
   TABLE DATA           x   COPY public.view (id, uuid, "createdAt", "updatedAt", sequence_id, content_type, "contentId", "campaignId") FROM stdin;
    public          postgres    false    230   f�       �           0    0    action_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.action_id_seq', 10, true);
          public          postgres    false    217            �           0    0    campaign_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.campaign_id_seq', 1, true);
          public          postgres    false    219            �           0    0    challenge_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.challenge_id_seq', 4, true);
          public          postgres    false    221            �           0    0    character_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.character_id_seq', 3, true);
          public          postgres    false    223            �           0    0    choice_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.choice_id_seq', 33, true);
          public          postgres    false    234            �           0    0    content_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.content_id_seq', 12, true);
          public          postgres    false    225            �           0    0    refresh_token_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.refresh_token_id_seq', 16, true);
          public          postgres    false    227            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    229            �           0    0    user_save_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_save_id_seq', 2, true);
          public          postgres    false    232            �           0    0    view_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.view_id_seq', 12, true);
          public          postgres    false    231            �           2606    17494 '   campaign PK_0ce34d26e7f2eb316a3a592cdc4 
   CONSTRAINT     g   ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT "PK_0ce34d26e7f2eb316a3a592cdc4" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.campaign DROP CONSTRAINT "PK_0ce34d26e7f2eb316a3a592cdc4";
       public            postgres    false    218            �           2606    17496 %   action PK_2d9db9cf5edfbbae74eb56e3a39 
   CONSTRAINT     e   ALTER TABLE ONLY public.action
    ADD CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.action DROP CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39";
       public            postgres    false    216            �           2606    17613 %   choice PK_5bf2e5939332f46711278a87fcd 
   CONSTRAINT     e   ALTER TABLE ONLY public.choice
    ADD CONSTRAINT "PK_5bf2e5939332f46711278a87fcd" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.choice DROP CONSTRAINT "PK_5bf2e5939332f46711278a87fcd";
       public            postgres    false    235            �           2606    17498 (   challenge PK_5f31455ad09ea6a836a06871b7a 
   CONSTRAINT     h   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a";
       public            postgres    false    220            �           2606    17500 &   content PK_6a2083913f3647b44f205204e36 
   CONSTRAINT     f   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "PK_6a2083913f3647b44f205204e36";
       public            postgres    false    224            �           2606    17502 (   character PK_6c4aec48c564968be15078b8ae5 
   CONSTRAINT     j   ALTER TABLE ONLY public."character"
    ADD CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."character" DROP CONSTRAINT "PK_6c4aec48c564968be15078b8ae5";
       public            postgres    false    222            �           2606    17504 #   view PK_86cfb9e426c77d60b900fe2b543 
   CONSTRAINT     c   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543";
       public            postgres    false    230            �           2606    17506 ,   refresh_token PK_b575dd3c21fb0831013c909e7fe 
   CONSTRAINT     l   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe";
       public            postgres    false    226            �           2606    17594 (   user_save PK_c317bf2e185e1ac6e66c12ea698 
   CONSTRAINT     h   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "PK_c317bf2e185e1ac6e66c12ea698" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "PK_c317bf2e185e1ac6e66c12ea698";
       public            postgres    false    233            �           2606    17510 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    228            �           2606    17512 &   content REL_15da270687e0d1787c673983c5 
   CONSTRAINT     g   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "REL_15da270687e0d1787c673983c5" UNIQUE ("viewId");
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "REL_15da270687e0d1787c673983c5";
       public            postgres    false    224            �           2606    17514 &   content REL_45d58eb4dfa54482a583349ac7 
   CONSTRAINT     l   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "REL_45d58eb4dfa54482a583349ac7" UNIQUE ("challengeId");
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "REL_45d58eb4dfa54482a583349ac7";
       public            postgres    false    224            �           2606    17516 (   challenge REL_c3ebec440a532b69677e03106f 
   CONSTRAINT     l   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "REL_c3ebec440a532b69677e03106f" UNIQUE ("contentId");
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "REL_c3ebec440a532b69677e03106f";
       public            postgres    false    220            �           2606    17518 #   view REL_ed3a27938ee10ef3b9df940eec 
   CONSTRAINT     g   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "REL_ed3a27938ee10ef3b9df940eec" UNIQUE ("contentId");
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "REL_ed3a27938ee10ef3b9df940eec";
       public            postgres    false    230            �           2606    17520 #   user UQ_78a916df40e02a9deb1c4b75edb 
   CONSTRAINT     f   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb";
       public            postgres    false    228            �           2606    17596 (   user_save UQ_a0de6a7d8128e543d86b16a88a7 
   CONSTRAINT     s   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "UQ_a0de6a7d8128e543d86b16a88a7" UNIQUE ("userId", filename);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "UQ_a0de6a7d8128e543d86b16a88a7";
       public            postgres    false    233    233            �           2606    17524 ,   refresh_token UQ_c31d0a2f38e6e99110df62ab0af 
   CONSTRAINT     j   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "UQ_c31d0a2f38e6e99110df62ab0af" UNIQUE (token);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "UQ_c31d0a2f38e6e99110df62ab0af";
       public            postgres    false    226            �           2606    17526 '   campaign UQ_e290ca6f46908d64b270de65471 
   CONSTRAINT     d   ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT "UQ_e290ca6f46908d64b270de65471" UNIQUE (name);
 S   ALTER TABLE ONLY public.campaign DROP CONSTRAINT "UQ_e290ca6f46908d64b270de65471";
       public            postgres    false    218            �           2606    17528 ,   refresh_token UQ_fdf0cae2ed6183bc794e391981c 
   CONSTRAINT     m   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "UQ_fdf0cae2ed6183bc794e391981c" UNIQUE (username);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "UQ_fdf0cae2ed6183bc794e391981c";
       public            postgres    false    226                        2606    17615    choice composite_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.choice
    ADD CONSTRAINT composite_key UNIQUE (campaign_id, sequence_id, character_id);
 >   ALTER TABLE ONLY public.choice DROP CONSTRAINT composite_key;
       public            postgres    false    235    235    235                       2606    17529 &   content FK_15da270687e0d1787c673983c50    FK CONSTRAINT     �   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "FK_15da270687e0d1787c673983c50" FOREIGN KEY ("viewId") REFERENCES public.view(id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "FK_15da270687e0d1787c673983c50";
       public          postgres    false    3574    230    224                       2606    17534 &   content FK_45d58eb4dfa54482a583349ac76    FK CONSTRAINT     �   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "FK_45d58eb4dfa54482a583349ac76" FOREIGN KEY ("challengeId") REFERENCES public.challenge(id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "FK_45d58eb4dfa54482a583349ac76";
       public          postgres    false    220    3552    224                       2606    17539 #   view FK_6b51ecec4cd96496cf35d53a80b    FK CONSTRAINT     �   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "FK_6b51ecec4cd96496cf35d53a80b" FOREIGN KEY ("campaignId") REFERENCES public.campaign(id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "FK_6b51ecec4cd96496cf35d53a80b";
       public          postgres    false    230    218    3548                       2606    17544 %   action FK_8d10deb2e785a8c1594a9424787    FK CONSTRAINT     �   ALTER TABLE ONLY public.action
    ADD CONSTRAINT "FK_8d10deb2e785a8c1594a9424787" FOREIGN KEY ("challengeId") REFERENCES public.challenge(id);
 Q   ALTER TABLE ONLY public.action DROP CONSTRAINT "FK_8d10deb2e785a8c1594a9424787";
       public          postgres    false    220    216    3552                       2606    17597 (   user_save FK_bcc3d0d1c6802b1c021c1a03ddb    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "FK_bcc3d0d1c6802b1c021c1a03ddb" FOREIGN KEY ("userId") REFERENCES public."user"(id);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "FK_bcc3d0d1c6802b1c021c1a03ddb";
       public          postgres    false    233    3570    228                       2606    17554 (   challenge FK_c3ebec440a532b69677e03106f5    FK CONSTRAINT     �   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "FK_c3ebec440a532b69677e03106f5" FOREIGN KEY ("contentId") REFERENCES public.content(id);
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "FK_c3ebec440a532b69677e03106f5";
       public          postgres    false    224    3558    220                       2606    17559 #   view FK_ed3a27938ee10ef3b9df940eec2    FK CONSTRAINT     �   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "FK_ed3a27938ee10ef3b9df940eec2" FOREIGN KEY ("contentId") REFERENCES public.content(id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "FK_ed3a27938ee10ef3b9df940eec2";
       public          postgres    false    230    224    3558            �   �  x��V�n9=S_��r1l���� c$97u���B/4_?ՋdY��IC�%n�^��GƄ'����̥V1%L� 6	K�D�4榐�.$�9�
q+�[�#���յ��|�@ӡt�cMxp�;�0T�~|�j"ɷ��'&_�H��E;;��k�u��zk�6��XI�`�J��L
�LKHU"b��^BM�(��$˯N=�h`��nt���j�.��&��wO;^�`K�m"l�$�r��*x�4xøʥ�<+|j/�)~+�(QY�צ�Y����4x���c�]D����~
���¾r�=f����������2ύe	Hϔ79ӪЬȰ�\,���vy�<�
�E��M��j݆wd�a)�8~b"g&֙j�(hhmhg��64�Ք�w��������l��. �#�,�2Ŝ�^�&ᆋ�$"ND|�-�'.�(��¥/=���n	#~�-Tm?���~���-�q�:�_�)�֔Ca\"��'�V�\J,�r~QcI~+D�U*_�߳��|��<�����~���N,|0c�@w��t�z?��s�����F�������
sF�\�{�s���3���pC���P��Ҍ�1�������w�,:\�c�����<�xH�~��y��]w:}���I�H
���p�L��20\3�dR����eƋ[��ehoW��׻vpu]m]k��:�h1by -CS�[��%�C��a�݁yx���E�Q��
������N��M7�E�Ǭ�p����%�WD2�ٱo��՜�ͮ����	��c��oR�y[�f�8c*GS�5 ���P.�/uSY$�4M�kS�|�+t�o�κ����C���#z�D������v�j'���ÀfQ�5ݎ�,�ڣ�	�z�6ڠ�/�l �A�yq�a�?�q�զ�t��l�c�ƶzt]���B�7��C��O�5�6�$|ʳԳ\��)U�B�L�q.u�/{�/N#���צ�y�,�Ҍ��XuC�N�'K��(���Z����t_�v��٢(��\ �6��p�}����*�N�B��[�`Qq9A��E��z;���qPd^87���n���N�P�/:�fx���,�JJ�3�~R��@w�.�}����;
m�0W�L�V����(��$N�E9^
�v�����P=��ҏ�[Yj���,6�+SVnu��,����<er>gzН^�!�����#[��Q��p���X�Pb/4�C:Em:zEf/���eq������Ek�s�s��m6�� ̷�4      �   �   x���?o�0�g�����c�-]�u�ԡ��gp���:D|���HU��-��w�4�L�E���Q^0qΓʄ�X���$�E��@ *(��Ōq��_���䠭��<���~�\�Y�۱nz��hE^�t�ˌ��Z���#�Yy���=�.��8(m�k;8e�w�F�F׆k��ږLn���b�`S� ����[�G/�_i?-�z5?���oqv�з�[�7����OK��a�	�f��      �   s  x�}�Kn�0�t�9@(�����&@79��Ȣ���>�� n
xC������Ȋ#K�^�P�L"pbal��IJ�!)!QQ�L'uC�WϢ_ny��qL[���a�@��8$���+��8�CHW��}ᦊ�<F�����L�,	��	̈́��	պ�6ZK��0ߡjl�Q?�~�
ja^!��ǐ^�������+�y/�q��J㺅92�p9���k��m�?���s���ZU���E�M �����ؗL��5�z���:i:��Z�'�a����Ӵ���O����3Oׂ+Ļ{| #�%���.[�ZWh�#�k!m�eʭG3Lʐ��|gtcZ���1z+��-�c��K�K>?8�[�T�i��Ң�       �   �   x���=N�0��>�^`Ϗ;% � �����^�*AD�,+8=ْ&Hh�W��}4YC��d�8V-��3�^�>�Mk�: �v;tUl�i�V�p��e���8����{ה�ЙòL���O��U.����T>���h�1�ZA	�!�f�Z�!��k�;n:��p[�-�ӣy=~�]5Ͷ�,A�g�.�3H�RJ")~}"6�O�3������+���}���?o:      �   �  x�}��m$����Q�T )R��F�/��`��=�6ƽ[�<�Ǵ����C��KM�a�\���C��������������|��Y��?�����￾�g���:z	�Q�{���E#�+�|��,�j�Shs���CV�H������s��Z��xj���>$��K��?�6'�8vxg1
���g�f5L�ؤ���dL�*�h�B���l7Ys�9��T����dJ�<q�iB�<��7�9���0QF�"T�e���(BEr|������ڜ�ʁ��6��EI<�	z˚�p�Z�J��&@T���)�9�┣�jiuܸ�#�U	�ǒ6����ɨ�=��7�9��a:,K^�$�"v]14ҲR���f��l�M�,��.����.�&�1�NNKB�Q6C]M!����nQ�!]9�<��O�"�IrWע�fAӪ����>f�#ado��o�S�\ʧ�E�?�x�����w��g�!����X�Y~H����!��.������T8p٤�-�ѕ5<��vtO'tr��n�]��IbX�b-��WYAW�И[�&�_��b{H�'~����C)��ґr)�"���#��ѧT><p�1��"abH��z����/�c?�~�OH�B�}j('ѭ�m�E=�[�7{x]��Cڳ_]�g.�H=�PJ��G�F�$�o2=3	��)��E;���r��(�G�Х�U�P�L:1u�֥���$��{�/���֍��P��l���L(�J�S3��d�G��(�E6e�>bb�*)X[-h�_=���e���f�V#t�������}�vP�aL<D�XD�pƋf��Y鄡{x�o�/a�$�R�{��X��� '�WG�~�aP4�ϡ��G]TfX%�>$n+���աA�I
��i���l"��^;f��m%�����EEw��m��R�%�c
-��ns����$,ׄ۫a�)LG��Pl�`iMޘ����n�p����"�v@~8ŕ��\3@�<�2B�^���'V�%�[E�C(�@��O�*�EA��d�tw˱��t�R�6�ʓ�[��@�A����b�y�%8}J��6�
V+9��^@6;a���B�/-D��ʨW˳��Vh�(��m�5�� J���J|X��$רF>z�hG�Q;��p�l1��S�3��Z���by�BH_ �\��.=�X@کCp��KCdX'71�m0�CInw�{���J#��2�FT�o����|xԒg���ad�H�[�[���������R�      �   �  x��UKo�6>K���^B�O��-����m����豑IW�����n�8�p�#�|���D�ܶBP����3A�����":�C%���3*�$�I��s'Y�(�k�@�KNēm:��)+���!����w��a�=��ox�$�}�H �l,M%�/�T���Ƌ =�U���r��Jj����cS'��s�Q+�"��U�2ղ��4�*P�xKÂ��L뻻\Z��jw�ߗ�B�dE~d�/��u�y[Q� �LrO�i7r�S�P �e���$�{#�SDA�g���#xS.��>/�nM��֕5��s��葁��z@w�����=L}�q�uJ?
gA?�q��An8~Gh$���?kɏWx� Ô����WB���	]�U�G���JD���)z��u��k%'m'���Q�s~+
/��}�V�o���@�O�/�{z%Ӷ���؛��a]!x�V\��)��y#�_�{Y��P
a��h�g�|d��d���mm*���I�B�N���{m�Q�=�b�S��j�J�?I��е�Eej[��"��Ө;�V��2j�uh���}���Y�R!�{*���<�8f$~S-���Kއ�8����T C��S�F��y��+���vd,O�in9�eO/M�YaikW1�A�&P%΃B�V)��)=��el%�V�G��q���9=��/�{�F�%R��:���#���=�w���G{|���_����w�}��o%���	<��'%O�#)ɤyz&c>�i]�Y]�c��K>_U�i�F�_�-�����W0�� �M"�
�sL˧�P��t��ŗِ����8�-��Q[H(�g|:2�9�A��}�9�9�\Le�Ax����68l��;�n[l�{%5��8�3����)+�k�Vƣ

�;	�iu��e%D-�"���M�+�m��R�O�е�����4u]���@K      �   �   x�}��n�0@�kx��@I�C��i'(%��@X22g6y����|9�9
M�!���-�1� �1<��9��G#�/��Q�m1�����bg���廉Z�Z)�U�Ċ��O�KU��{�vJ�t|�r�+yӊLb��Z����cl��\t�=��|����'��U\��9�sMӽ��dƞ������r�bu
��ɞ,��^�b3����}�\��[�O�      �   �   x�}�KO�@�u�+X��a���te�X|4 �j��igJ*LkE#���qa�����0�1%1
�fT�d�"��T�F��z(N�Pi$ LHrP(cy���5�7�rblS�	�������-T�6�a�t�����-?VO�-�&bA���-ӟ��t��U�|�@WM-X-����'oGL����h�*�J0N � B����P���m��6�Mw��Os�y���a׼.{����]s5���9��v1�)����}�?r�`�      �   �   x�}�A
!�ᵞ�D��h2g�FG
�u�OK�*�-x�E�X�A%� E�Չ���Q`����7��[��������<�q�ā>�HA�v�0fA�>v���be(U�&�[�ܼY�$�Բ��������r��l�2#      �   �  x�}�Kn�@DךS���&[gɦ����,r�pV�5�6����E�6c�6ք2r�P�wh(�%��icdB`��|��;"e�;�������?o��A�F�U�\m�f3(%9�L��Lm�q�=�vF/$��������c�;=tK%�`��So��VU�*˚�J:/�I�<K�;Iέi��Vb�X��h	Z�8�x2m�ԟ4\w�̯���gZ
Zޢ��Q��"w������y��e>Hw*f�:�/R:�r�l�Y'0�16�>� +����싥��Njhr'���,`�Ɉ2�Nh��FD�\3�1���K�r�{̓4�Ivn̓V���Bެ��K��H�Xƫ�Q�Ւb<;&M^�$?�J����,e��$��mq��ۘ=Oի��vw���;�|97|�"�&�j�Х�:-f��9�Ӹ*ܳ�/9��@�=���R��� i��_�8;/��#̩��/�����,��E
ĉ�<���������     