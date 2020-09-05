var tipuesearch = {"pages": [{'title': 'About', 'text': '這裡是國立虎尾科技大學機械設計工程系大一的計算機程式課程網頁. \n CP2020 將在  https://kaggle.com ,  https://colab.research.google.com  以及可攜程式系統上進行. \n 以下是 CP2020 課程進行流程: \n W1 學員登入學校配發的 @gm 郵件帳號後,  填寫基本資料 \n W1 告知將利用  Gitter  進行課程議題討論 \n W1 就電腦軟硬體與網路環境的使用進行介紹 \n W2 學員建立  Github ,  Gitlab,   Heroku  與  Authorea  帳號 \n Ｗ2 學員利用 Github Pages 與 CMSiMDE 建立個人網頁 \n W2 學員學習如何利用 Git 與 Github 維護個人網頁 \n Ｗ3 統整 W1 與 W2 教材內容至各學員個人網頁 \n Ｗ3 完成亂數分組,\xa0 每班分成四組 \n W4 - W9 Python 基本語法與功能 \n Ｗ10 - W14 分組 Python 專案 \n Ｗ15 - W18 分組總結報告 \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': '評分', 'text': '本課程的評分標準: \n \n 從未遲到者得 10% \n 從未缺席且從未無正當理由離席超過 15 分鐘者得 20% \n 從未缺交各週作業且從未抄襲他人作業且從未不當引用網路資料者得 30% \n 作業與報告內容充實, 每一項課程內容都拍攝具參考價值之教學影片者得 20% \n 完成具體且創新之課程內容改進項目, 並能積極協助組員解決各種難題者得 10% \n 個人之倉儲內容, 網頁, 網誌與簡報內容均令人嘆為觀止者得 10% \n \n 根據上述課程評分標準, 由組員之自評成績決定課程期中成績, 視為本課程之學員期望成績, 期中考後, 則依據各週之組員自評成績, 組員互評成績與教師評分成績, 按照下列流程計算學員之學期成績. \n \'\'\'\n根據評分表單中的 自評分數, 互評得分, 教師評分, 計算學員課程成績\n\'\'\'\n# diff 函式傳回兩輸入分數的絕對差值 \ndef diff(分數1, 分數2):\n    return abs(分數1 - 分數2)\n     \n# getHigh函式傳回兩分數中較高者\ndef getHigh(分數1, 分數2):\n    if  分數1 > 分數2:\n        return 分數1\n    else:\n        return 分數2\n\n# getLow 函式傳回兩分數中較低者\ndef getLow(分數1, 分數2):\n    if  分數1 < 分數2:\n        return 分數1\n    else:\n        return 分數2\n\n# 分組評分函式取自評與教師評分比較, 若差距大於 5 分取其低者\n# 否則依自評 40%, 教師 60% 計算\ndef 分組評分(自評分數, 教師評分):\n    return getLow(自評分數, 教師評分)\n    if diff(自評分數, 教師評分) > 5:\n        return getLow(自評分數, 教師評分)\n    else:\n        return int(自評分數*0.4 + 教師評分*0.6)\n\n# 全班比分函式取互評與分組評分比較, 若差距小於 5 分取其高者\n# 否則依互評得分 40%, 分組評分 60% 計算     \ndef 全班比分(互評得分, 分組評分):\n    if diff(互評得分, 分組評分) < 5:\n        學員成績 = getHigh(互評得分, 分組評分)\n    else:\n        學員成績 = int(互評得分*0.4 + 分組評分*0.6)\n    return 學員成績\n\n# 學員之學期成績依照上述分組評分與全班比分函式計算 \ndef 學員成績(自評分數, 互評得分, 教師評分):\n    學員課程成績 = 全班比分(互評得分, 分組評分(自評分數, 教師評分))\n    return 學員課程成績\n\n# 利用迴圈從 50 起每次增量 5 分, 分別列出各評分組合下的成績計算結果    \nfor i in range(10):\n    self_score = 50 + i*5\n    for j in range(10):\n        peer_score = 50 + j*5\n        for k in range(10):\n            teacher_score = 50 + k*5\n            print(self_score, peer_score, teacher_score, "=", 學員成績(self_score, peer_score, teacher_score))', 'tags': '', 'url': '評分.html'}, {'title': '討論區', 'text': 'https://gitter.im/mdecourse/cp2020 \n', 'tags': '', 'url': '討論區.html'}, {'title': 'Computer', 'text': 'https://oli.cmu.edu/product-category/computer-science-programming-indep/ \xa0 \n \n 個人電腦軟硬體簡介 \n 軟體 \n 電腦操作系統 \n Windows \n Linux \n Mac OS \n 分散式版次管理系統 \n 近端 \n 遠端 \n 網際內容管理 (Github 與 Heroku) \n CMSiMDE \n Pelican \n Reveal.js \n 將包含 html 與 Javascript 的靜態網頁資料以 Github Pages, Gitlab Pages 或 Heroku 伺服 \n Python 網際程式透過 Flask 則可以部署到  Heroku  雲端主機', 'tags': '', 'url': 'Computer.html'}, {'title': 'PC Hardware', 'text': 'https://oli.cmu.edu/courses/pc-hardware-open-free/ \xa0 \n', 'tags': '', 'url': 'PC Hardware.html'}, {'title': 'PC Software', 'text': 'https://oli.cmu.edu/courses/pc-software-open-free/ \xa0 \n', 'tags': '', 'url': 'PC Software.html'}, {'title': 'Logics and Proofs', 'text': 'https://oli.cmu.edu/courses/logic-proofs-copy/', 'tags': '', 'url': 'Logics and Proofs.html'}, {'title': 'Media Programming', 'text': 'https://oli.cmu.edu/courses/media-programming-copy/ \xa0', 'tags': '', 'url': 'Media Programming.html'}, {'title': 'Network', 'text': '電腦網路系統與設定簡介 \n \n 校內網路設定 \n 系網路 \n IPv4 與 IPv6 \n 代理主機 \n 校外網路設定 \n VPN \n 下載安裝校方提供軟體 \n 每半年認證一次 \n 下載校方購買的電子書與期刊 \n', 'tags': '', 'url': 'Network.html'}, {'title': 'SSH', 'text': 'SSH 網路連線加密機制 \n SSH 指 Secure SHell, 是一種網路連線加密機制, 當我們在 Mac OS 或 Linux 操作系統中的 Terminal 或 XTerm 時, 可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機. \n 一般針對公開的 Github 倉儲, 任何人都可以直接透過 https 協定 clone 倉儲, 無需認證, 但是倉儲協同者若要從近端將改版資料送到 Github, 就必須通過認證, 假如採 https 協定, 則倉儲協同者在推送改版資料時, 必須提供帳號與密碼. \n 除了 https 協定, Github 也接受倉儲的協同者以 SSH 連線的方式, git clone private 倉儲, 或以 SSH 連線的方式將近端改版資料推送到遠端倉儲. \n SSH 的連線加密機制依賴 private key 與 public key 之間的配對, 當使用者建立 SSH key pair 時, private key 必須保護在近端, 而 public key 則必須送到進行認證的遠端伺服器中. \n 建立 OpenSSH key pair \n Github 伺服器所支援的 SSH 為 OpenSSH 檔案格式的協定, 因此使用者要送到 Github 伺服器上的 OpenSSH 格式 public key, 可以透過 portablegit 中的 sh.exe 進入 SHell, 然後利用以下指令建立採  rsa  加密演算法的 key pair: \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n 在 -C 後的使用者學號字串, 會直接附加在 OpenSSH public key 檔案的最後端, 讓使用者得以辨識 public key 的對應使用者, 而所建立的 OpenSSH private key 則可以透過 puttygen 轉換為 putty 特有檔案格式. \n Putty 作為 SSH 連線客戶端工具 \n Putty 套件可用於 Windows 與 Linux 操作系統, 可以讓使用者以 SSH 加密機制遠端登入到其他伺服器主機, 由於電腦輔助設計室電腦的第三磁區上課時會轉為純 IPv6 協定上網, 當使用者要將近端改版資料推送到遠端時, 由於 Github 至今仍只支援 IPv4 網路協定, 因此無論是以 https 或 ssh 方式連線, 都必須透過能同時支援 IPv4 與 IPv6 的代理主機. \n 以 https 協定對 Github 連線的代理主機設定位於 home/.gitconfig, 而在 Windows 10 操作系統中採 SSH 對 Github 連線, 就必須將代理主機與 private key 的設定, 透過 Putty 完成. \n 以 SSH 協定與 Github 連線 \n 1. 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中. \n 2. 近端可攜系統啟動時, 必須確認已經設定 \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 3. 在 Putty 中設定對 github.com ssh 時必須提供的 Proxy 代理主機設定與 Auth 認證所需的近端 private key, 而且必須利用 puttygen 將 OpenSSH 格式轉為 putty 檔案格式 \n 4. 無論在 git clone 或 git push (URL 位於倉儲 .git/config 中), URL 必須使用  git@github.com:帳號/倉儲名稱.git  連線', 'tags': '', 'url': 'SSH.html'}, {'title': 'Topics', 'text': 'Open Design Movement.pdf \n Designing Open Engineering Systems.pdf \n Inductry 4.0 and Workforce for Tomorrow.pdf \n Digitization is the transformation from analog to digital or digital representation of a physical item with the goal to digitize and automate processes or workflows. \n Digital Business is the creation of new business designs by blurring the digital and physical worlds. It promises to usher in an unprecedented convergence of people, business and things that disrupts existing business models - even those born of the Internet and e-business eras. \n Digital Transformation is the novel use of digital technology to solve traditional problems. These digital solutions enable - other than efficiency via automation - new types of innovation and creativity, rather than simply enhance and support traditional methods. Success is anchored in both digital business and digitization. \n Interoperability: The ability of machines, devices, sensors, and people to connect and communicate with each other via the Internet of Things (IoT) or the Internet of People (IoP). \n Information transparency: The ability of information systems to create a virtual copy of the physical world by enriching digital plant models with sensor data. This requires the aggregation of raw sensor data to higher-value context information. \n Technical assistance: First, the ability of assistance systems to support humans by aggregating and visualizing information comprehensibly for making informed decisions and solving urgent problems on short notice. Second, the ability of cyber physical systems to physically support humans by conducting a range of tasks that are unpleasant, too exhausting, or unsafe for their human co-workers. \n Decentralized decisions: The ability of cyber physical systems to make decisions on their own and to perform their tasks as autonomously as possible. Only in the case of exceptions, interferences, or conflicting goals, are tasks delegated to a higher level. \n In addition to being able to adapt to advances in technology, the person needs to be able to communicate and relate to people (from different disciplines, cultures, values) who may not be co-located. Talent in a digitally transforming enterprise ($Talent_{dt}$) can loosely be expressed as follows: \n $Talent_{dt} = Talent + Generative Learning$ \n Generative learning is learning that enhances our capacity to innovate and create. Foundational to it is the active integration of new ideas with the learner’s existing schemata. \n We cannot teach people how to learn what is needed, unlearn what is no longer relevant and re-learn that which is still needed. We can provide an opportunity for people to learn by reflecting on doing (Experiential Learning). \n Machine Learning Applications for Furnamce Control and Process Optimization in Steelmaking.pdf \n 課程助教: \n 40723150 (lead), 40723110, 40723115, 40723138, 40723148 \n 40723145 (lead), 40723102, 40723103, 40723153, 40723245 \n 40723212 (lead), 40723216, 40723223, 40723246 \n 負責事項: \n 電腦輔助設計室電腦第三磁區系統維護 \n 每週四 19:00 - 21:00 在電腦輔助設計室為操作實習與助教協助回答問題時間 \n \n', 'tags': '', 'url': 'Topics.html'}, {'title': 'Video', 'text': "Deep Learning \n \n 2016 \n By 2020, the workplace will look very different from the one we see today. Companies will function in a vastly more  digitized environment , but 30 percent of them will fail because there aren't enough workers with the skills to drive the  digital transformation  that companies need. \n Analysts are forecasting a global shortage of 38 million to 40 million college-educated workers, a gap that will affect advanced nations as well as emerging countries. And the length of tenure in a job is shortening as well. The average time a worker spends in one job has declined from five to seven years to only two to three years, widening the gap between supply and demand. This session will explore the critical changes that must be made to give workers the skills required in the workforce of tomorrow. \n \n 2017 \n In the eyes of top executives, their job is to imagine the future and work towards making that imagined future a reality. Many of the largest companies in the world are intent on embracing change and building pathways that lead to a robust workforce, innovation and job creation. Corporate leaders must pursue and encourage growth while also promoting values that reach beyond the bottom line. \n How do business leaders build and drive the workforce of the future?  Change can be an amorphous concept; how should corporations define and pursue it?  What are the most effective ways for CEOs and other top executives to combine growth and purpose to reflect workforce and corporate values and culture? \n \n 2018 \n \n 2019 \n \n 2020 \n", 'tags': '', 'url': 'Video.html'}, {'title': 'W1', 'text': 'W1 學員登入學校配發的 @gm 郵件帳號後, \xa0 填寫基本資料 \n W1 告知將利用 \xa0 Gitter \xa0 進行課程議題討論 (其餘各種問題可以至  discourse  討論) \n W1 就電腦軟硬體與網路環境的使用進行介紹 \n Notice: 一甲 9/24 (四) 下午要補 10/2 中秋節連假的課程時段 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '下載可攜 Python 套件 \n 當你發現從\xa0 https://forum.eng.nfu.edu.tw/t/topic/39 \xa0可以直接下載 fall2020_cp.7z 壓縮檔案之後, 直接利用 7zip 解開壓縮, 然後在 64 位元 Windows 10 啟動 start.bat, 就可以直接在 SciTE 編輯器中解譯 Python 程式, 而且可以利用 pip 工具安裝所需的 Python 模組之後, 接下來必須: \n \n 了解如何自己建立與 fall2020_cp.7z 相同功能的可攜 Python 套件 \n 了解如何在可攜套件中加入 portablegit, sharex, putty 等工具, 並學習如何使用 \n 了解如何在 github 以 submodule (或不以 submodule) 建立 cmsimde 倉儲 \n 了解如何在近端維護 CMSiMDE 內容管理系統 \n \n for 重複迴圈的應用 \n 接下來要在頁面中插入 11 張圖, 希望寬度為 600 且 img 屬性加入 add_border. \n 第一張圖以手動方式插入後, 手動進入 html 編輯, 加入 class="add_border" 屬性後, 取得插入圖檔的 html 如下: \n <p><img class="add_border" height="342" src="./../images/1_cp_git_and_cmsimde.png" width="600"></p> \n 隨後的 10 張圖希望利用 Python 迴圈產生後再從 html 編輯插入. \n \n \n \n \n \n \n \n \n \n \n \n 上述利用迴圈插入具有規律的字串程式碼為: \n \'\'\'\n參考用的 html 字串為\n<p><img class="add_border" height="342" src="./../images/1_cp_git_and_cmsimde.png" width="600"></p>\n\'\'\'\nfirstSegment = \'\'\'<p><img class="add_border" height="342" src="./../images/\'\'\'\n\nsecondSegment = \'\'\'_cp_git_and_cmsimde.png" width="600"></p>\'\'\'\n\nfor i in range(2, 12):\n    print(firstSegment + str(i) + secondSegment) \n 其於 SciTE 編輯器執行畫面: \n \n 請問, 當成功以  https://localhost:9443 \xa0對 CMSiMDE 動態網站連線時出現以下畫面, 代表甚麼意思? \n \n 當我們成功完成 CMSiMDE 動態網站內容, 且利用\xa0 generate_pages 按鈕轉為靜態網站資料後, 要利用 git 指令新增提交退送時, 碰到以下問題: \n \n 接著配合畫面中的提示, 利用 git config 指令操作結束後, 接著嘗試以 git push 將改版資料推送到遠端, 結果又出現下列畫面: \n \n 根據提示, 以 git pull 拉下遠端與近端的差異資料後, 又出現下列畫面, 因為提示中拉下的資料與 Leo Editor 有關, 因此在命令列視窗中輸入 leo, 試著開啟 Leo Editor, 結果出現的小視窗無論如何操作都會落入重複迴圈, 於是在 y:\\home\\.leo 目錄中, 以 SciTE 編輯器建立一個 .leoID.txt 檔案, 內容為任何字串, 然後以 stop.bat 關閉可攜系統之後, 再以 start.bat 開啟系統, 終於能夠開啟 Leo Editor, 並利用 git push 將近端資料成功送到 github. \n \n \n 請問, git config --global 指令執行成功後, 這些設定會存在哪裡? \n 另外假如我們不是使用可攜程式套件而是使用電腦輔助設計室中電腦所安裝的 Python 以及 git, 但是卻想在其他用戶所存放的 git config identity 中, 提交屬於自己帳號下的 comment, 該如何操作? \n 上述的流程設定, 必須每一次推送時都輸入 github 所登錄的帳號與密碼, 假如在協同者面前輸入帳號密碼時, 其他人都一直盯著我的鍵盤看, 該如何是好? \n 上述在 git push 之前需要 git pull 的原因是甚麼? \n 上述 Leo Editor 啟動時, 為何會進入重複迴圈? \n CMSiMDE 是用甚麼程式語言建立的? \n CMSiMDE 為什麼有動態網站與靜態網站的設計? \n 假如每一班都配給一台 Ubuntu 20.04 的伺服器, 可以配置與 Windows 10 相同的程式環境嗎? 假如我使用 MacBook 筆電也可以嗎? \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': 'Ｗ3 統整 W1 與 W2 教材內容至各學員個人網頁 \n Ｗ3 完成亂數分組,\xa0 每班分成四組', 'tags': '', 'url': 'W3.html'}, {'title': 'Python', 'text': 'Principles of Computation with Python: \n https://oli.cmu.edu/courses/principles-of-computation-with-python-open-free/ \n \n 請利用學校所配發的 @gm 電子郵件帳號登入  https://kaggle.com , 並且連結至  https://www.kaggle.com/learn/python  就可以開始 在  https://www.kaggle.com/notebooks  網際環境中學習 Python 程式語言. \n 例如: \n https://www.kaggle.com/kevinelong/introduction-to-computer-programming-review/execution \n https://www.kaggle.com/mdecourse/cp2020 \n https://www.kaggle.com/abinesh100/easy-download-images-in-25-lines-py3 \n 除了  https://kaggle.com  與  https://colab.research.google.com  執行並學習 Python 外, 本課程將要求學員在  Github Pages  與  Gitlab Pages  中建立個人靜態網頁, 並將網際動態 Python 系統部署在  Heroku,  分組協同報告則利用  Authorea  編輯發布. \n 其他學習 Python 的方式: \n \n 直接在操作系統中安裝 Python 解譯器與編輯器 \n 利用可攜程式系統中的 Python 解譯器與編輯器 \n 直接在網際環境中搭建 Brython 程式環境 \n 直接在網際環境中搭建 Jupyter Notebook 程式環境 \n \n 不同程式環境中的組態設定與功能差異 \n 其他參考教材: \n https://www.py4e.com/ \n https://automatetheboringstuff.com/', 'tags': '', 'url': 'Python.html'}, {'title': '工作流程', 'text': '建立 CP 2020 課程網頁 \n \n 以 mdecourse 帳號登入 github.com \n 建立 cp2020 空倉儲, 選擇由系統建立 README.md (延伸題目: 假如不新 README.md, 則又該如何操作?） \n 在近端啟動隨身程式系統 (或者自行在操作系統安裝所需套件) \n 將遠端的 cp2020 倉儲 git clone 到近端 (延伸題目: git clone 是甚麼?) \n 利用 git submodule add 導入 cmsimde 當作目錄 \n 從近端 cmsimde 目錄中取出 up_dir 中的內容至 cp2020 倉儲根目錄 \n 在近端可以進入 cmsimde 目錄, 以 python wsgi.py 啟動動態網頁 (延伸題目: 何謂動態網頁? 有何功能?) \n 在近端編輯動態網頁內容後, 轉為靜態網頁 (如何轉?) \n 完成靜態網頁轉換之後, 利用近端 git 指令將新版本新增, 提交並推送到遠端 \n \n 在近端編寫第一個 Python 程式, 每修改一次都利用 git 進行提交, 修改並提交 4 次後, 可以在任何版本下回復到先前的任一版本內容. \n cphw1.7z \n i = 1\n\nprint(i) \n 進入 y:\\tmp\\cphw1 從 git init 開始 \n 每一次改版, i\xa0 增量 1 \n git add . \n git commit -m "i=1" \n git push \n Y:\\tmp\\cphw1>git log\ncommit cb568bc032bb4e4364c347b5b6225c7849450c5f (HEAD -> master)\nAuthor: mdecourse <mdecourse@gmail.com>\nDate:   Wed Aug 26 15:18:39 2020 +0800\n\n    i=4\n\ncommit d9ef5402c330aac9791a9cd20403ad583854ceb6\nAuthor: mdecourse <mdecourse@gmail.com>\nDate:   Wed Aug 26 15:18:19 2020 +0800\n\n    i=3\n\ncommit 4b40d3a60e7e37b7847d9fb70c3a0380ab20f9fe\nAuthor: mdecourse <mdecourse@gmail.com>\nDate:   Wed Aug 26 15:17:56 2020 +0800\n\n    i=2\n\ncommit 1852efb2003bd52c4baa27cc7f0c38b8faf55d14\nAuthor: mdecourse <mdecourse@gmail.com>\nDate:   Wed Aug 26 15:17:27 2020 +0800\n\n    i=1 \n 在近端使用電腦儲存檔案, 最理想的情況是要利用 git 或 Fossil SCM 等分散式版次管理套件, 將各版本的內容進行提交並註記改版緣由之後, 再從近端推送到遠端. \n 使用分散式版次管理的目的 \n 可以註記每次改版的提交者, 並能利用 git checkout 到先前的各版本 \n 資料存一份在遠端, 避免因為近端電腦損毀而丟失資料. \n \n', 'tags': '', 'url': '工作流程.html'}, {'title': '亂數分組', 'text': '亂數分組: \n semester=1091 \n courseno=0762 \n cp \n 1a 1091/0762 \n 1b 1091/0776 \n cad \n 2a 1091/0788 \n 2b 1091/0801 \n 學員名單 URL:   課程代號:      \n \n 四技設一甲計算機程式學員名單: \n https://nfulist.herokuapp.com/?semester=1091&courseno=0762 \n 四技設一乙計算機程式學員名單: \n https://nfulist.herokuapp.com/?semester=1091&courseno=0776 \n 參考資料 \n get_student_list.py \n import \'dart:html\';\n  \n  InputElement studListUrl = querySelector("#studListUrl");\n  String studUrl;\n  InputElement courseName = querySelector("#courseName");\n  String cName;\n  // 將 Label 改為 Textarea, 避免產生過程結果嵌入所在頁面\n  TextAreaElement output = querySelector("#output");\n  \nmain() {\n  querySelector("#submit").onClick.listen((e) => grouping());\n}\n  \ngrouping() {\n  output.innerHtml = "";\n  \n  if (studListUrl.value != "") {\n    studUrl = studListUrl.value;\n  } else {\n    studUrl = \'https://nfulist.herokuapp.com\';\n  }\n  \n  if (courseName.value != "") {\n\tcName = courseName.value;\n  } else {\n\tcName = "cp2020";\n  }\n  \n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  int j;\n  int total;\n  int inc;\n  // 每組學員暫存數列\n  var gpList = [];\n  // 全班分組數列\n  var group = [];\n  // 各組人數數列\n  var numList = [];\n  \n  HttpRequest.getString(studUrl).then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var studList = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    studList.shuffle();\n    total = studList.length;\n    output.text += "全班總計" + total.toString() + " 人\\n";\n    numList = getNumList(studList.length);\n    inc = 0;\n    for (i in numList){\n      // 列印區隔符號\n      output.text += \'=\' * 20 + "\\n";\n      output.text += "group $gth 有 " + i.toString() + " 人: \\n";\n      gpList = [];\n      for (j = 0; j < i; j++){\n        output.text += studList[j+inc] + "\\n";\n        // 在各分組數列中加入將對應的學員學號\n        gpList.add(studList[j+inc]);\n      }\n      gth = gth + 1;\n      inc = inc + j;\n        //output.text += studList[j] + "\\n";\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n      gpList.sort();\n      group.add(gpList);\n    }\n    // 列出全班分組數列\n    output.text += group.toString() + "\\n";\n    // 列出已經排序後的分組名單\n    output.text += \'=\' * 25 + "\\n";\n    output.text += \'以下為排序後的各組成員名單: \\n\';\n    gth = 1;\n    /*\n    404231\n    s4052\n    4062\n    s4072\n    4082\n    5072\n    5083\n    */\n    // 先列出純文字以 \\n 跳行組員資料\n    for (i=0; i < group.length; i++){\n      // 列印區隔符號\n      output.text += \'=\' * 20 + "\\n";\n      output.text += "group $gth \\n";\n      gpList = [];\n      for (j=0; j < group[i].length; j++){\n        output.text += group[i][j] + "\\n";\n      }\n      gth = gth + 1;\n    }\n     \n    gth = 1;\n    // 最後列出超文件以 <br\\> 跳行組員資料, 包含倉儲與網站\n    for (i=0; i < group.length; i++){\n      // 列印區隔符號\n      output.text += \'\\n\' + \'=\' * 30 + "<br \\>";\n      output.text += "group $gth <br \\>";\n      gpList = [];\n      for (j=0; j < group[i].length; j++){\n          if (group[i][j].startsWith(\'4052\') || group[i][j].startsWith(\'4072\')) {\n              output.text += "Repository: <a href=\'https://github.com/s" + \n                                      group[i][j] + "/" + cName + "\'>" + group[i][j] + \n                                      "</a>" + " | Site: <a href=\'https://s" + group[i][j] + \n                                      ".github.io/" + cName + "\'>" + group[i][j] + \n                                      "</a><br \\>";\n          }\n          else {\n              output.text += "Repository: <a href=\'https://github.com/" + \n                                      group[i][j] + "/" + cName +"\'>" + group[i][j] + \n                                      "</a>" + " | Site: <a href=\'https://" + group[i][j] + \n                                      ".github.io/" + cName + "\'>" + group[i][j] + \n                                      "</a><br \\>";\n          }\n      }\n      gth = gth + 1;\n    }\n  });\n}\n  \nList getNumList(int total){\n  // total student number\n  // int total = 65;\n  // initial each group expect to be "eachGrp" number of people\n  int eachGrp = 10;\n  // may divide into "grpNum" number of group\n  int grpNum = total ~/ eachGrp;\n  // vacant list\n  var splits = [];\n  // find remainder when total number divid into "grpNum" number of group\n  int remainder = total % grpNum;\n  // number of people in one group by calculation\n  int calGrp = total ~/ grpNum;\n  \n  for (int i = 0; i < grpNum; i++) {\n    splits.add(calGrp);\n  }\n  //print(splits);\n  \n  for (int i = 0; i < remainder; i++) {\n    splits[i] += 1;\n  }\n  //print(splits);\n  return splits;\n } \n index.html \n <h4>亂數分組:</h4>\n學員名單 URL: <input type="text" id="studListUrl" size="60" value="https://nfulist.herokuapp.com"><br />\n課程代號: <input type="text" id="courseName" size="15" value="cp2020"><br />\n<input type="submit" value="開始分組" id="submit"><br />\n<textarea id="output" cols="80" rows="10"></textarea> \n style.css \n body {\n  color: white;\n  font-size: 20px;\n}\n \ninput, select, textarea {\nfont-size: 100%;\n} \n even_grouping.py \n import random\nimport requests\n  \n# getNumList 主要在每組最低人數下, 將不足 10 人的分組\n# 平均分配至各組\ndef getNumList(total, eachGrp=10):\n    # total is the number of students\n    # each group at least 10 students\n    #eachGrp = 10;\n    # may divide into "grpNum" number of group\n    grpNum = total // eachGrp;\n    # check grpNum\n    #print(grpNum)\n    # vacan list\n    splits = []\n    # find remainder when total number divid into "grpNum" number of group\n    remainder = total % grpNum\n    # number of people in one group by calculation\n    calGrp = total // grpNum\n      \n    for i in range(grpNum):\n        splits.append(calGrp)\n          \n    # check first splits\n    #print(splits)\n    \n    for i in range(remainder):\n        splits[i] += 1\n      \n    # check final splits\n    #print(splits);\n    return splits;\n  \n# 儲存學生名單資料的 url\ntarget_url = "http://mde.tw/cp2020/downloads/get_student_list/2020spring_cd_2a_list.txt"\n# 利用 requests 讀取 url 中的資料\nf = requests.get(target_url)\n# get student list from target_url\n# 利用 splitlines() 將資料放入數列 studList\nstudList = f.text.splitlines()\n# 每組預計分組的最低人數\nnum_in_one_group = 10\n# 每組學員暫存數列\ngpList = []\n# 全班分組數列\ngroup = []\n# 各組人數數列\nnumList = []\n# get numList\nnumList = getNumList(len(studList), num_in_one_group)\n# check numList\n# 列出已經補齊的各組人數數列\nprint("預計各組人數數列:" + str(numList))\n  \noutput = ""\ngth = 1\ninc = 0\n  \n# 弄亂 studList\nrandom.shuffle(studList)\noutput += "以下為尚未排序前的各組學員學號: \\n"\nfor i in numList:\n    # 列印區隔符號\n    output += \'=\' * 20 + "\\n";\n    output += "group " + str(gth) + " 有 " + str(i) + " 人: \\n"\n    # 每組學員暫存數列, 在此 reset\n    gpList = []\n    for j in range(i):\n        output += studList[j+inc] + "\\n"\n        # 在各分組數列中加入將對應的學員學號\n        gpList.append(studList[j+inc])\n        \n    gth = gth + 1\n    inc = inc + j\n    # 將各組學員數列依照學號排序\n    gpList.sort()\n    group.append(gpList)\n  \n# 列出尚未排序前的分組結果\nprint(output)\n# 列出已經完成排序的分組數列\nprint("已經排序後的分組數列:" + str(group))\n  \noutput = ""\n# 列出已經排序後的分組名單\noutput += \'=\' * 25 + "\\n"\noutput += \'以下為排序後的各組成員名單:\\n\'\ngth = 1\n  \n# 先列出純文字以 \\n 跳行組員資料\nfor i in range(len(group)):\n    # 列印區隔符號\n    output += \'=\' * 20 + "\\n"\n    output += "group" + str(gth) + "\\n"\n    gpList = []\n      \n    for j in range(len(group[i])):\n        output += str(group[i][j]) + "\\n"\n        \n    gth = gth + 1\n      \nprint(output) \n 使用 Brython \n http://mde.tw/lab/content/Python.html \n # 利用 Brython 內建的 open 開啟 url 後, 以 read() 將資料取出\noutput = open(\'http://mde.tw/cp2020/downloads/get_student_list/2020spring_cd_2a_list.txt\').read()\n# 利用 print  將 output 資料列出\nprint(output) \n', 'tags': '', 'url': '亂數分組.html'}, {'title': 'Kaggle', 'text': 'https://di2.io/2019/03/is-kaggle-suitable-to-teach-programming-with-python/ \n https://fayz.in/stories/s/1417/0/?ckt_id=ZGL1ZGVk&title=Importance_of_github_kaggle \n https://www.programmersought.com/article/92261138300/ \n https://towardsdatascience.com/kaggle-for-beginners-getting-started-75decb43c0c0 \n Reference \n https://awesomeopensource.com/project/apachecn/Interview \n https://awesomeopensource.com/project/girls-in-ai/Girls-In-AI \n https://awesomeopensource.com/project/Mikoto10032/DeepLearning \n https://awesomeopensource.com/project/ypwhs/dogs_vs_cats \n', 'tags': '', 'url': 'Kaggle.html'}, {'title': 'Flask-Flutter', 'text': 'https://medium.com/@pyzimos/flutter-chatbot-with-python-flask-backend-heroku-deployment-706baafbb8f1 \n https://heartbeat.fritz.ai/digit-recognizer-with-flutter-and-tensorflow-lite-33f5145b5f32 \n \n', 'tags': '', 'url': 'Flask-Flutter.html'}, {'title': 'cmsimde', 'text': '在  https://github.com/mdecourse/cmsimde \xa0專案中, Flask 網際程式被用來建立動態內容管理系統, 並結合 bs4 與 lxml 模組功能, 將動態網頁轉為靜態網頁, 使用者可以將靜態網頁部署在 Github Pages 或 Heroku. 而靜態網頁可以再結合 Leo Editor 大綱管理程式, 用於整合 pelian 網誌與 reveal.js 網際簡報系統. \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'pdf-project', 'text': 'https://github.com/mdecourse/cd2020pj1 \xa0 \n 功能包括: \n 透過 authomatic 模組讓使用者以 oauth2 模式登入 \n \n 接受 pdf 檔案上傳至 Google Drive \n 可讓使用者直接在線上合併 pdfs 檔案或分割鎖上傳的 pdf 檔案 \n \n', 'tags': '', 'url': 'pdf-project.html'}, {'title': 'nfu-project', 'text': 'https://github.com/mdecourse/nfulist \n 與  https://nfulist.herokuapp.com \xa0網站資料同步 \n https://nfulist.herokuapp.com/?semester=1082&courseno=0767 \n heroku login \n add _netrc to home \n git add . \n git commit -m "message" \n git push heroku master \n git remote add github  https://github.com/mdecourse/nfulist.git \n git push github master \n cp \n 1a 1091/0762 \n 1b 1091/0776 \n cad \n 2a 1091/0788 \n 2b 1091/0801 \n cd 2a 1082/0767 2b 1082/0780   2a 1072/0777 2b 1072/0790 2a 1062/0788 2a 1062/0802   wcm 1082/0744   1072/0754 1062/0765   wcmj 1082/2418 \n \n', 'tags': '', 'url': 'nfu-project.html'}, {'title': 'Brython', 'text': 'https://github.com/BrythonServer/brython-server \n https://mdecp2018.github.io/finalproject-bgx', 'tags': '', 'url': 'Brython.html'}, {'title': 'Heroku', 'text': 'Heroku 與計算機程式 \n https://www.heroku.com/ \xa0是提供雲端應用程式服務的網站, 在計算機程式課程中, 可以透過 Heroku 內建伺服 PHP 的功能, 將 CMSiMDE 系統的靜態網站送到 Heroku 進行伺服, 也可以設法利用 Heroku 執行 CMSiMDE 的動態網站, 只是根據 Heroku 系統的規定, 每 24 小時雲端主機重啟之後, 非以 Git 提交推送的資料將會被 reset. \n 因此在未設定 persistent 資料儲存方案的 Heroku 應用, 只適合配置用於直接查詢會轉介其他系統資料的網際 Python 應用. \n Heroku 應用 \n 以下將列出在計算機程式課程中的三種 Heroku 應用: \n \n 將 CMSiMDE 的靜態網頁送到 Heroku 伺服 \n 利用 Heroku 配置 Webster 與 Wordnet 字典查詢服務 (透過 SQLite 資料庫) \n 利用 Heroku 上的 Flask 網際 ajax 程式, 從學校教務伺服器中取出課程相關資料 \n \n Heroku 示範倉儲與主機 \n https://github.com/mdecourse/scrum1-cmsimde \n https://scrum1-cmsimde.herokuapp.com \xa0 \n https://github.com/mdecourse/lookupdict \n https://lookupdict.herokuapp.com \xa0 \n https://github.com/mdecourse/nfulist \n https://nfulist.herokuapp.com \xa0 \n https://github.com/mdecourse/scrum1-2020cp1 \n http://scrum1-2020cp1.herokuapp.com/ \n Heroku 操作 \n 登入 @gm  下載 Heroku cli 可攜.7z , 解開壓縮檔案後, 在 start.bat 中將 Heroku bin 設定指令搜尋路徑, 重新啟動後, 以 heroku version 確定指令可以正常執行後, heroku login 成功後, 登入帳號密碼會存入 home/_netrc 中. 之後便可直接透過 heroku cli 指令直接對遠端主機下命令.', 'tags': '', 'url': 'Heroku.html'}, {'title': 'Deep Learning', 'text': 'https://www.kaggle.com/learn/deep-learning', 'tags': '', 'url': 'Deep Learning.html'}, {'title': 'Projects', 'text': '雲端電腦輔助機械設計工具的比較 \n https://total3dprinting.org/onshape-vs-fusion-360/ \xa0是電腦輔助設計實習與協同產品設計實習課程中的議題之一, 比較 onshape 與 fusion 360 的功能與特性. \n 利用 Python 建立雲端程式工具 \n 結合 Brython, Javascript Gist 與近端程式系統, 利用 Flask 為主體, 建立一個能夠部署在 Heroku 的 Python 網際程式編寫與執行系統. \n 參考:\xa0 http://mde.tw/lab/content/Python.html \n 原先的系統是直接將導引給 Brython 執行的 Python 程式, 直接寫在網頁中, 然後透過 Javascript 與 html 按鈕逐一帶出已經編寫存入網頁的程式, 然後修改執行. \n 假如, 能夠使用\xa0 http://mde.tw/lab/content/Javascript.html \xa0與\xa0 http://mde.tw/lab/content/Dart.html \xa0中的方法, 將 Python 程式存於 Gist 或 Github Pages 網站, 然後透過 ajax 的方式帶至網際瀏覽器中執行, 並能利用 Javascript 按鈕將在網頁編寫執行的 Python 程式存至近端, 放入特定倉儲中進行版次管理. \n 圖形介面程式開發 \n Beginning PyQt  終於出書, 之前  PyQt5  曾被用來開發平面機構分析與合成套件 -  Pyslvs-UI , 接下來  PyQt5  或  Qt for Python  還能用來開發甚麼機械設計相關工具套件? \n Discourse 論壇與  Pydiscourse \n https://forum.eng.nfu.edu.tw/ \xa0以 Ruby 編寫, 若能透過  Pydiscourse  與\xa0 https://docs.discourse.org/ \xa0中的 Discourse API 結合, 將可延伸\xa0 http://lab.mde.tw/blog/sync-pelican-and-blogger-content.html \xa0中的 Markdown 文章, 在 Leo Editor  的編輯下, 將內容同步至  Pelican  與  Blogger  網誌.', 'tags': '', 'url': 'Projects.html'}]};