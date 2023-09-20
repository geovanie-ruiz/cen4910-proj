// SCREEN TO CREATE A USER ACCOUNT
// REQUIRES email, username, password
// POPUP DIALOG BOX on failure to create account

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_progress_hud/flutter_progress_hud.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/hex_color.dart';

class CreateAccount extends StatefulWidget {
  const CreateAccount({Key? key}) : super(key: key);

  @override
  State<CreateAccount> createState() => _CreateAccountState();
}

class _CreateAccountState extends State<CreateAccount> {

  bool isAPIcallProcess = false;
  bool hidePassword = true;
  GlobalKey<FormState> globalFormKey = GlobalKey<FormState>();
  String? username;
  String? password;
  String? email;


  Widget _createAccountUI(BuildContext context) {
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
              left: 30,
              top: 10,
            ),
            child: Text(
              "Create Account",
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
                "email", //keyword
                "Email", //title
                "Email", //hint
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

          const SizedBox(
            height: 50,
          ),
          Center(
            child: FormHelper.submitButton(
              "SUBMIT",
                  () {
                //TODO implement submit login
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
          Align(
            alignment: Alignment.center,
            child: ElevatedButton.icon(
              style: ButtonStyle(
                backgroundColor: MaterialStateColor.resolveWith((states) => Colors.black26),
              ),
              icon: const Icon(Icons.arrow_back, color: Colors.orangeAccent,),
              label: const Text(
                'Return to Login',
                style: TextStyle(
                    color: Colors.orangeAccent,
                    fontSize: 18,
                ),
              ),
              onPressed: () {
                Navigator.pushNamed(context, "/");
              },
            ),
          ),
          const SizedBox(
            height: 20,
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
              child: _createAccountUI(context),
            ),
            //inAsyncCall: isAPIcallProcess,
            //opacity: 0.3,
            //key: UniqueKey(),
          ),
        )
    );
  }
}
