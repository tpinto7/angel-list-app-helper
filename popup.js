// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function submitForm(){
  let color = '#e8453c';
  console.log("submitForm");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
}

let submitButton = document.getElementById('submit123');

submitButton.onclick = function(element) {
  submitForm();
};
