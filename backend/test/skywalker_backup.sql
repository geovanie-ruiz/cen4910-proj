PGDMP      (            	    {        	   skywalker    16.0    16.0 U    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 	   skywalker    DATABASE     k   CREATE DATABASE skywalker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE skywalker;
                postgres    false                        3079    16399 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    17217    action    TABLE     �  CREATE TABLE public.action (
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
    "challengeId" integer
);
    DROP TABLE public.action;
       public         heap    postgres    false    2            �            1259    17216    action_id_seq    SEQUENCE     �   CREATE SEQUENCE public.action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.action_id_seq;
       public          postgres    false    219            �           0    0    action_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.action_id_seq OWNED BY public.action.id;
          public          postgres    false    218            �            1259    17273    campaign    TABLE     !  CREATE TABLE public.campaign (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.campaign;
       public         heap    postgres    false    2            �            1259    17272    campaign_id_seq    SEQUENCE     �   CREATE SEQUENCE public.campaign_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.campaign_id_seq;
       public          postgres    false    227            �           0    0    campaign_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.campaign_id_seq OWNED BY public.campaign.id;
          public          postgres    false    226            �            1259    17229 	   challenge    TABLE     `  CREATE TABLE public.challenge (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    text character varying NOT NULL,
    type character varying NOT NULL,
    "contentId" integer
);
    DROP TABLE public.challenge;
       public         heap    postgres    false    2            �            1259    17228    challenge_id_seq    SEQUENCE     �   CREATE SEQUENCE public.challenge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.challenge_id_seq;
       public          postgres    false    221            �           0    0    challenge_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.challenge_id_seq OWNED BY public.challenge.id;
          public          postgres    false    220            �            1259    17355 	   character    TABLE     �  CREATE TABLE public."character" (
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
       public         heap    postgres    false    2            �            1259    17354    character_id_seq    SEQUENCE     �   CREATE SEQUENCE public.character_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.character_id_seq;
       public          postgres    false    231            �           0    0    character_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.character_id_seq OWNED BY public."character".id;
          public          postgres    false    230            �            1259    17243    content    TABLE     a  CREATE TABLE public.content (
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
       public         heap    postgres    false    2            �            1259    17242    content_id_seq    SEQUENCE     �   CREATE SEQUENCE public.content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.content_id_seq;
       public          postgres    false    223            �           0    0    content_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.content_id_seq OWNED BY public.content.id;
          public          postgres    false    222            �            1259    17367    refresh_token    TABLE     P  CREATE TABLE public.refresh_token (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    username character varying NOT NULL,
    token character varying NOT NULL
);
 !   DROP TABLE public.refresh_token;
       public         heap    postgres    false    2            �            1259    17366    refresh_token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.refresh_token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.refresh_token_id_seq;
       public          postgres    false    233            �           0    0    refresh_token_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.refresh_token_id_seq OWNED BY public.refresh_token.id;
          public          postgres    false    232            �            1259    16531    user    TABLE     r  CREATE TABLE public."user" (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    email character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    2            �            1259    16530    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    217            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    216            �            1259    17324 	   user_save    TABLE     Z  CREATE TABLE public.user_save (
    id integer NOT NULL,
    uuid uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    filename character varying NOT NULL,
    save_data jsonb NOT NULL,
    "userId" integer
);
    DROP TABLE public.user_save;
       public         heap    postgres    false    2            �            1259    17323    user_save_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_save_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_save_id_seq;
       public          postgres    false    229            �           0    0    user_save_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_save_id_seq OWNED BY public.user_save.id;
          public          postgres    false    228            �            1259    17259    view    TABLE     {  CREATE TABLE public.view (
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
       public         heap    postgres    false    2            �            1259    17258    view_id_seq    SEQUENCE     �   CREATE SEQUENCE public.view_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.view_id_seq;
       public          postgres    false    225            �           0    0    view_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.view_id_seq OWNED BY public.view.id;
          public          postgres    false    224            �           2604    17220 	   action id    DEFAULT     f   ALTER TABLE ONLY public.action ALTER COLUMN id SET DEFAULT nextval('public.action_id_seq'::regclass);
 8   ALTER TABLE public.action ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    17276    campaign id    DEFAULT     j   ALTER TABLE ONLY public.campaign ALTER COLUMN id SET DEFAULT nextval('public.campaign_id_seq'::regclass);
 :   ALTER TABLE public.campaign ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    17232    challenge id    DEFAULT     l   ALTER TABLE ONLY public.challenge ALTER COLUMN id SET DEFAULT nextval('public.challenge_id_seq'::regclass);
 ;   ALTER TABLE public.challenge ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    17358    character id    DEFAULT     n   ALTER TABLE ONLY public."character" ALTER COLUMN id SET DEFAULT nextval('public.character_id_seq'::regclass);
 =   ALTER TABLE public."character" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    17246 
   content id    DEFAULT     h   ALTER TABLE ONLY public.content ALTER COLUMN id SET DEFAULT nextval('public.content_id_seq'::regclass);
 9   ALTER TABLE public.content ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    17370    refresh_token id    DEFAULT     t   ALTER TABLE ONLY public.refresh_token ALTER COLUMN id SET DEFAULT nextval('public.refresh_token_id_seq'::regclass);
 ?   ALTER TABLE public.refresh_token ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    16534    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    17327    user_save id    DEFAULT     l   ALTER TABLE ONLY public.user_save ALTER COLUMN id SET DEFAULT nextval('public.user_save_id_seq'::regclass);
 ;   ALTER TABLE public.user_save ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    17262    view id    DEFAULT     b   ALTER TABLE ONLY public.view ALTER COLUMN id SET DEFAULT nextval('public.view_id_seq'::regclass);
 6   ALTER TABLE public.view ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �          0    17217    action 
   TABLE DATA           �   COPY public.action (id, uuid, "createdAt", "updatedAt", choice_id, label, alignment, next, score, pass, fail, "challengeId") FROM stdin;
    public          postgres    false    219   �j       �          0    17273    campaign 
   TABLE DATA           L   COPY public.campaign (id, uuid, "createdAt", "updatedAt", name) FROM stdin;
    public          postgres    false    227   �m       �          0    17229 	   challenge 
   TABLE DATA           `   COPY public.challenge (id, uuid, "createdAt", "updatedAt", text, type, "contentId") FROM stdin;
    public          postgres    false    221   0n       �          0    17355 	   character 
   TABLE DATA           ~   COPY public."character" (id, uuid, "createdAt", "updatedAt", name, class, strength, intelligence, luck, "bioUrl") FROM stdin;
    public          postgres    false    231   �o       �          0    17243    content 
   TABLE DATA           p   COPY public.content (id, uuid, "createdAt", "updatedAt", exposition, next, "challengeId", "viewId") FROM stdin;
    public          postgres    false    223   �p       �          0    17367    refresh_token 
   TABLE DATA           \   COPY public.refresh_token (id, uuid, "createdAt", "updatedAt", username, token) FROM stdin;
    public          postgres    false    233   �t       �          0    16531    user 
   TABLE DATA           _   COPY public."user" (id, uuid, "createdAt", "updatedAt", username, password, email) FROM stdin;
    public          postgres    false    217   u       �          0    17324 	   user_save 
   TABLE DATA           f   COPY public.user_save (id, uuid, "createdAt", "updatedAt", filename, save_data, "userId") FROM stdin;
    public          postgres    false    229   �v       �          0    17259    view 
   TABLE DATA           x   COPY public.view (id, uuid, "createdAt", "updatedAt", sequence_id, content_type, "contentId", "campaignId") FROM stdin;
    public          postgres    false    225   �w       �           0    0    action_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.action_id_seq', 10, true);
          public          postgres    false    218            �           0    0    campaign_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.campaign_id_seq', 1, true);
          public          postgres    false    226            �           0    0    challenge_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.challenge_id_seq', 4, true);
          public          postgres    false    220            �           0    0    character_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.character_id_seq', 3, true);
          public          postgres    false    230            �           0    0    content_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.content_id_seq', 12, true);
          public          postgres    false    222            �           0    0    refresh_token_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.refresh_token_id_seq', 12, true);
          public          postgres    false    232            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    216            �           0    0    user_save_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_save_id_seq', 2, true);
          public          postgres    false    228            �           0    0    view_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.view_id_seq', 12, true);
          public          postgres    false    224            �           2606    17283 '   campaign PK_0ce34d26e7f2eb316a3a592cdc4 
   CONSTRAINT     g   ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT "PK_0ce34d26e7f2eb316a3a592cdc4" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.campaign DROP CONSTRAINT "PK_0ce34d26e7f2eb316a3a592cdc4";
       public            postgres    false    227            �           2606    17227 %   action PK_2d9db9cf5edfbbae74eb56e3a39 
   CONSTRAINT     e   ALTER TABLE ONLY public.action
    ADD CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.action DROP CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39";
       public            postgres    false    219            �           2606    17239 (   challenge PK_5f31455ad09ea6a836a06871b7a 
   CONSTRAINT     h   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a";
       public            postgres    false    221            �           2606    17253 &   content PK_6a2083913f3647b44f205204e36 
   CONSTRAINT     f   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "PK_6a2083913f3647b44f205204e36";
       public            postgres    false    223            �           2606    17365 (   character PK_6c4aec48c564968be15078b8ae5 
   CONSTRAINT     j   ALTER TABLE ONLY public."character"
    ADD CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."character" DROP CONSTRAINT "PK_6c4aec48c564968be15078b8ae5";
       public            postgres    false    231            �           2606    17269 #   view PK_86cfb9e426c77d60b900fe2b543 
   CONSTRAINT     c   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "PK_86cfb9e426c77d60b900fe2b543";
       public            postgres    false    225            �           2606    17377 ,   refresh_token PK_b575dd3c21fb0831013c909e7fe 
   CONSTRAINT     l   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe";
       public            postgres    false    233            �           2606    17334 (   user_save PK_c317bf2e185e1ac6e66c12ea698 
   CONSTRAINT     h   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "PK_c317bf2e185e1ac6e66c12ea698" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "PK_c317bf2e185e1ac6e66c12ea698";
       public            postgres    false    229            �           2606    16541 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    217            �           2606    17257 &   content REL_15da270687e0d1787c673983c5 
   CONSTRAINT     g   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "REL_15da270687e0d1787c673983c5" UNIQUE ("viewId");
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "REL_15da270687e0d1787c673983c5";
       public            postgres    false    223            �           2606    17255 &   content REL_45d58eb4dfa54482a583349ac7 
   CONSTRAINT     l   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "REL_45d58eb4dfa54482a583349ac7" UNIQUE ("challengeId");
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "REL_45d58eb4dfa54482a583349ac7";
       public            postgres    false    223            �           2606    17241 (   challenge REL_c3ebec440a532b69677e03106f 
   CONSTRAINT     l   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "REL_c3ebec440a532b69677e03106f" UNIQUE ("contentId");
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "REL_c3ebec440a532b69677e03106f";
       public            postgres    false    221            �           2606    17271 #   view REL_ed3a27938ee10ef3b9df940eec 
   CONSTRAINT     g   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "REL_ed3a27938ee10ef3b9df940eec" UNIQUE ("contentId");
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "REL_ed3a27938ee10ef3b9df940eec";
       public            postgres    false    225            �           2606    16543 #   user UQ_78a916df40e02a9deb1c4b75edb 
   CONSTRAINT     f   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb";
       public            postgres    false    217            �           2606    17336 (   user_save UQ_a0de6a7d8128e543d86b16a88a7 
   CONSTRAINT     s   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "UQ_a0de6a7d8128e543d86b16a88a7" UNIQUE ("userId", filename);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "UQ_a0de6a7d8128e543d86b16a88a7";
       public            postgres    false    229    229            �           2606    17381 ,   refresh_token UQ_c31d0a2f38e6e99110df62ab0af 
   CONSTRAINT     j   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "UQ_c31d0a2f38e6e99110df62ab0af" UNIQUE (token);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "UQ_c31d0a2f38e6e99110df62ab0af";
       public            postgres    false    233            �           2606    17285 '   campaign UQ_e290ca6f46908d64b270de65471 
   CONSTRAINT     d   ALTER TABLE ONLY public.campaign
    ADD CONSTRAINT "UQ_e290ca6f46908d64b270de65471" UNIQUE (name);
 S   ALTER TABLE ONLY public.campaign DROP CONSTRAINT "UQ_e290ca6f46908d64b270de65471";
       public            postgres    false    227            �           2606    17379 ,   refresh_token UQ_fdf0cae2ed6183bc794e391981c 
   CONSTRAINT     m   ALTER TABLE ONLY public.refresh_token
    ADD CONSTRAINT "UQ_fdf0cae2ed6183bc794e391981c" UNIQUE (username);
 X   ALTER TABLE ONLY public.refresh_token DROP CONSTRAINT "UQ_fdf0cae2ed6183bc794e391981c";
       public            postgres    false    233            �           2606    17301 &   content FK_15da270687e0d1787c673983c50    FK CONSTRAINT     �   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "FK_15da270687e0d1787c673983c50" FOREIGN KEY ("viewId") REFERENCES public.view(id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "FK_15da270687e0d1787c673983c50";
       public          postgres    false    3547    223    225            �           2606    17296 &   content FK_45d58eb4dfa54482a583349ac76    FK CONSTRAINT     �   ALTER TABLE ONLY public.content
    ADD CONSTRAINT "FK_45d58eb4dfa54482a583349ac76" FOREIGN KEY ("challengeId") REFERENCES public.challenge(id);
 R   ALTER TABLE ONLY public.content DROP CONSTRAINT "FK_45d58eb4dfa54482a583349ac76";
       public          postgres    false    3537    221    223            �           2606    17311 #   view FK_6b51ecec4cd96496cf35d53a80b    FK CONSTRAINT     �   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "FK_6b51ecec4cd96496cf35d53a80b" FOREIGN KEY ("campaignId") REFERENCES public.campaign(id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "FK_6b51ecec4cd96496cf35d53a80b";
       public          postgres    false    3551    225    227            �           2606    17286 %   action FK_8d10deb2e785a8c1594a9424787    FK CONSTRAINT     �   ALTER TABLE ONLY public.action
    ADD CONSTRAINT "FK_8d10deb2e785a8c1594a9424787" FOREIGN KEY ("challengeId") REFERENCES public.challenge(id);
 Q   ALTER TABLE ONLY public.action DROP CONSTRAINT "FK_8d10deb2e785a8c1594a9424787";
       public          postgres    false    3537    221    219            �           2606    17337 (   user_save FK_bcc3d0d1c6802b1c021c1a03ddb    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_save
    ADD CONSTRAINT "FK_bcc3d0d1c6802b1c021c1a03ddb" FOREIGN KEY ("userId") REFERENCES public."user"(id);
 T   ALTER TABLE ONLY public.user_save DROP CONSTRAINT "FK_bcc3d0d1c6802b1c021c1a03ddb";
       public          postgres    false    217    3531    229            �           2606    17291 (   challenge FK_c3ebec440a532b69677e03106f5    FK CONSTRAINT     �   ALTER TABLE ONLY public.challenge
    ADD CONSTRAINT "FK_c3ebec440a532b69677e03106f5" FOREIGN KEY ("contentId") REFERENCES public.content(id);
 T   ALTER TABLE ONLY public.challenge DROP CONSTRAINT "FK_c3ebec440a532b69677e03106f5";
       public          postgres    false    223    221    3541            �           2606    17306 #   view FK_ed3a27938ee10ef3b9df940eec2    FK CONSTRAINT     �   ALTER TABLE ONLY public.view
    ADD CONSTRAINT "FK_ed3a27938ee10ef3b9df940eec2" FOREIGN KEY ("contentId") REFERENCES public.content(id);
 O   ALTER TABLE ONLY public.view DROP CONSTRAINT "FK_ed3a27938ee10ef3b9df940eec2";
       public          postgres    false    223    225    3541            �   �  x���Kk�F��տ�f�͔�����01�!�!<����V���6������݆&A}��sJnB�+6k�e�D2���<���R1���Tʭ
[�����$ȷ"���N�������|��0��~}h;����Ϗ�H��V�K``�dZ��|�����?il�0�_��hpߐ�R����#tD�c(R���iŜ�����P�ګ��拳4�J�킰�$u���a�t���e�����m21�H�T<_�Y1}Z͊�+�P<�8�����V}@z'	r���ijt��W��~ѿ���!-}��':�/V����-��yZ��+�3,'��7�H��"Y␙23H<2Y58���U�S[�-s��*�ۛ~.]��J��g�;��ĽL�����Q��χ��+3���^�@�u��C�L 9����ȃ�)��pL{̀� ���s����1�k��քk�"�؄#�_e|:[�])���;��7u��c[�4E,����dZa.���:�[�\�_�08�j���U�23�*�5y5f)8�xJ�/X��r��e��$A~���R�O�O�n�a��$��΁� ����YQ�j�O�2��B�R�v���@�U�$�-S-w�2/�gZ�X�`u�sm����(/��פw]:�z
旮=D��<�צHC�"xQ��F�X��P��jnG �<k�dt���	%ߢvs����]�Eo(h?��+��B�e|%T�s"��l6�-      �   e   x�}ɱ� ��L����qwL�&� Ȗ,��O����u�c�p��"����������o��n�v�=�Qh�WeN[�y|��>�z�u~�e^��}��      �   s  x�}�Kn�0�t�9@(�����&@79��Ȣ���>�� n
xC������Ȋ#K�^�P�L"pbal��IJ�!)!QQ�L'uC�WϢ_ny��qL[���a�@��8$���+��8�CHW��}ᦊ�<F�����L�,	��	̈́��	պ�6ZK��0ߡjl�Q?�~�
ja^!��ǐ^�������+�y/�q��J㺅92�p9���k��m�?���s���ZU���E�M �����ؗL��5�z���:i:��Z�'�a����Ӵ���O����3Oׂ+Ļ{| #�%���.[�ZWh�#�k!m�eʭG3Lʐ��|gtcZ���1z+��-�c��K�K>?8�[�T�i��Ң�       �   �   x���=N�0��>�^`Ϗ;% � �����^�*AD�,+8=ْ&Hh�W��}4YC��d�8V-��3�^�>�Mk�: �v;tUl�i�V�p��e���8����{ה�ЙòL���O��U.����T>���h�1�ZA	�!�f�Z�!��k�;n:��p[�-�ӣy=~�]5Ͷ�,A�g�.�3H�RJ")~}"6�O�3������+���}���?o:      �   �  x��UKo�6>K���^B�O��-����m����豑IW�����n�8�p�#�|���D�ܶBP����3A�����":�C%���3*�$�I��s'Y�(�k�@�KNēm:��)+���!����w��a�=��ox�$�}�H �l,M%�/�T���Ƌ =�U���r��Jj����cS'��s�Q+�"��U�2ղ��4�*P�xKÂ��L뻻\Z��jw�ߗ�B�dE~d�/��u�y[Q� �LrO�i7r�S�P �e���$�{#�SDA�g���#xS.��>/�nM��֕5��s��葁��z@w�����=L}�q�uJ?
gA?�q��An8~Gh$���?kɏWx� Ô����WB���	]�U�G���JD���)z��u��k%'m'���Q�s~+
/��}�V�o���@�O�/�{z%Ӷ���؛��a]!x�V\��)��y#�_�{Y��P
a��h�g�|d��d���mm*���I�B�N���{m�Q�=�b�S��j�J�?I��е�Eej[��"��Ө;�V��2j�uh���}���Y�R!�{*���<�8f$~S-���Kއ�8����T C��S�F��y��+���vd,O�in9�eO/M�YaikW1�A�&P%΃B�V)��)=��el%�V�G��q���9=��/�{�F�%R��:���#���=�w���G{|���_����w�}��o%���	<��'%O�#)ɤyz&c>�i]�Y]�c��K>_U�i�F�_�-�����W0�� �M"�
�sL˧�P��t��ŗِ����8�-��Q[H(�g|:2�9�A��}�9�9�\Le�Ax����68l��;�n[l�{%5��8�3����)+�k�Vƣ

�;	�iu��e%D-�"���M�+�m��R�O�е�����4u]���@K      �   �   x�}�Mr�0��5���|��� �I22��$`�V�Ңr���~�y	8a�"�u�}У�P@!nB�	��v ��F O /(�"�1���}0��n�c�j�2��͜���|�hs�?OU�Ȼ�Y��(��ż��o]�/n��.�����J��S]m�.��/��oi�<�C<�2��Z&�tY�ƞ��ݜ�86u�iZ�o-����[�@eec+�bG��s]�ǃPR      �   �   x�}�KO�@�u�+X��a���te�X|4 �j��igJ*LkE#���qa�����0�1%1
�fT�d�"��T�F��z(N�Pi$ LHrP(cy���5�7�rblS�	�������-T�6�a�t�����-?VO�-�&bA���-ӟ��t��U�|�@WM-X-����'oGL����h�*�J0N � B����P���m��6�Mw��Os�y���a׼.{����]s5���9��v1�)����}�?r�`�      �     x����N� E��W4���=�������i�v��,&���h�:�N\�^��`�# ���U@�[��#`cP (Pr���S���O���T�D'�c�-G�U�'�|ws����!כ�=��qO9b~�=�\Dz>���b�^�uw�b̯�M��e��^"��>g�=���8�@�qK&��M.����],�pz��4��
\Yk�88$k�d¥0�j%�5g��@t�jԍ��U�o"�
�m��AeZW�������.��u���      �   �  x�}�Kn�@DךS���&[gɦ����,r�pV�5�6����E�6c�6ք2r�P�wh(�%��icdB`��|��;"e�;�������?o��A�F�U�\m�f3(%9�L��Lm�q�=�vF/$��������c�;=tK%�`��So��VU�*˚�J:/�I�<K�;Iέi��Vb�X��h	Z�8�x2m�ԟ4\w�̯���gZ
Zޢ��Q��"w������y��e>Hw*f�:�/R:�r�l�Y'0�16�>� +����싥��Njhr'���,`�Ɉ2�Nh��FD�\3�1���K�r�{̓4�Ivn̓V���Bެ��K��H�Xƫ�Q�Ւb<;&M^�$?�J����,e��$��mq��ۘ=Oի��vw���;�|97|�"�&�j�Х�:-f��9�Ӹ*ܳ�/9��@�=���R��� i��_�8;/��#̩��/�����,��E
ĉ�<���������     