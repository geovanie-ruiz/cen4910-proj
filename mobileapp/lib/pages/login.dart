// LOGIN PAGE
// REQUIRES username, password
// POPUP DIALOG BOX on failure to log in

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_progress_hud/flutter_progress_hud.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/hex_color.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<LoginPage> {

  bool isAPIcallProcess = false;
  bool hidePassword = true;
  GlobalKey<FormState> globalFormKey = GlobalKey<FormState>();
  String? username;
  String? password;

  Widget _loginUI(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.width/2,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Align(
                    alignment: Alignment.topCenter,

                    child: Image.asset(
                      "assets/images/star_wars_logo4.png",
                      width: 900,
                      fit: BoxFit.fill,
                    ),
                  )
                ],
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(
              left: 35,
              top: 10,
            ),
            child: Text(
              "Login",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 24.0,
                color: Colors.orangeAccent,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 12),
            child: FormHelper.inputFieldWidgetWithLabel(
                context,
                "userName", //keyword
                "User Name", //title
                "Username", //hint
                (onValidateVal) {
                  if (onValidateVal.isEmpty) {
                    return "Username cannot be empty.";
                  }
                  return null;
                },
                (onSavedVal) {
                  username = onSavedVal;
                },
                //TODO: figure out why this icon isn't working
                prefixIcon: const Icon(
                Icons.person,
                color: Colors.orangeAccent,
              ),
                borderFocusColor: Colors.deepOrangeAccent,
                prefixIconColor: Colors.orangeAccent.withOpacity(0.7),
                borderColor: Colors.orangeAccent.withOpacity(0.7),
                textColor: Colors.orangeAccent,
                hintColor: Colors.orangeAccent.withOpacity(0.7),
              borderRadius: 10
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 12),
            child: FormHelper.inputFieldWidgetWithLabel(
              context,
              "password",
              "Password",
              "Password",
              (onValidateVal) {
                if (onValidateVal.isEmpty) {
                  return "Password cannot be empty.";
                }
                return null;
              },
              (onSavedVal) {
                password = onSavedVal;
              },
              //TODO: figure out why this icon isn't working
              prefixIcon: const Icon(
                Icons.person,
                color: Colors.orangeAccent,
              ),
              borderFocusColor: Colors.deepOrangeAccent,
              prefixIconColor: Colors.orangeAccent.withOpacity(0.7),
              borderColor: Colors.orangeAccent.withOpacity(0.7),
              textColor: Colors.orangeAccent,
              hintColor: Colors.orangeAccent.withOpacity(0.7),
              borderRadius: 10,
              obscureText: hidePassword,
              suffixIcon: IconButton(
                onPressed: () {
                  setState(() {
                    hidePassword = !hidePassword;
                  });
                },
                color: Colors.orangeAccent.withOpacity(0.7),
                icon: Icon(
                  hidePassword ? Icons.visibility_off : Icons.visibility
                ),
              ),
            ),
          ),
          Align(
            alignment: Alignment.bottomRight,
            child: Padding(
              padding: const EdgeInsets.only(right: 24, top: 10, bottom: 10),
              child: RichText(
                text: const TextSpan(
                  style: TextStyle(
                    color: Colors.orangeAccent,
                    fontSize: 14,
                  ),
                  children: <TextSpan> [
                    TextSpan(
                      text: 'Forget Password? ',
                      style: TextStyle(
                        color: Colors.orangeAccent,
                        decoration: TextDecoration.underline,
                      ),
                      //TODO: implement tap gesture for "forgot password" or leave out?
                    )
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          Center(
            child: FormHelper.submitButton(
                "LOG IN",
                () {
                  //TODO implement submit login
                  Navigator.pushNamed(context, "/choosesave");
                },
                btnColor: Colors.orange.withOpacity(0.95),
                borderColor: Colors.deepOrange,
                txtColor: Colors.black,
                fontSize: 20,
                borderRadius: 10,
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          Center(
            child: Text(
              "OR",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18,
                color: Colors.orangeAccent.withOpacity(0.9),
              ),
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          Align(
            alignment: Alignment.center,
            child: Padding(
              padding: const EdgeInsets.only(top: 10),
              child: RichText(
                text: TextSpan(
                  text: 'Don\'t have an account?   ',
                  style: const TextStyle(
                    color: Colors.orangeAccent,
                    fontSize: 18,
                  ),
                  children: <TextSpan> [
                    TextSpan(
                      text: 'Sign up',
                      style: const TextStyle(
                        color: Colors.orangeAccent,
                        decoration: TextDecoration.underline,
                      ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.pushNamed(context, "/createaccount");
                        }
                    )
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
          backgroundColor: Colors.black,
          body: ProgressHUD(
            child: Form(
              key: globalFormKey,
              child: _loginUI(context),
            ),
            //inAsyncCall: isAPIcallProcess,
            //opacity: 0.3,
            //key: UniqueKey(),
          ),
        )
    );
  }
}







