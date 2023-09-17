// SCREEN TO CREATE A USER ACCOUNT
// REQUIRES email, username, password
// POPUP DIALOG BOX on failure to create account

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_progress_hud/flutter_progress_hud.dart';
import 'package:snippet_coder_utils/FormHelper.dart';
import 'package:snippet_coder_utils/hex_color.dart';

class Story extends StatefulWidget {
  const Story({Key? key}) : super(key: key);

  @override
  State<Story> createState() => _StoryState();
}

class _StoryState extends State<Story> {


  Widget _storyUI(BuildContext context) {
    return Center(
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
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
          backgroundColor: Colors.black,
          body: ProgressHUD(
            child: Form(
              child: _storyUI(context),
            ),
            //inAsyncCall: isAPIcallProcess,
            //opacity: 0.3,
            //key: UniqueKey(),
          ),
        )
    );
  }
}
