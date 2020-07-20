import * as React from 'react';

function QuestionList() {
    return (
        <React.Fragment>
        <div className="wrapmsgr_chatbot-info_div">
            <p className="ng-binding">Wrapsody Chatbot에게 무엇이든 물어보세요!</p>
            <a href=""><i ng-class="{0:'icon_bell_off', 1:'icon_bell'}[current.convo.notificationType]" ng-show="notificationEnabled" ng-click="toggleNotification()" ng-attr-title="{{ current.convo.notificationType > 0 ? '알림 해제' : '알림 수신' }}" title="알림 해제" className="icon_bell"></i></a>
        </div>
        <ul className="question-list">
            <li ng-className="{active: intentGroup.active}" ng-repeat="intentGroup in current.botIntentGroup" ng-init="intentGroup.active = false" className="ng-scope">
                <div ng-click="toggleIntentGroup(intentGroup)" className="ng-binding">
                    Wrapsody 사용법
								<i className="icon_triangle wrapmsgr_collapse" ng-className="{true: 'wrapmsgr_expand', false: 'wrapmsgr_collapse'}[intentGroup.active]"></i>
                </div>
                <ul className="question-sub-list ng-hide" ng-show="intentGroup.active">

                </ul>
            </li><li ng-className="{active: intentGroup.active}" ng-repeat="intentGroup in current.botIntentGroup" ng-init="intentGroup.active = false" className="ng-scope">
                <div ng-click="toggleIntentGroup(intentGroup)" className="ng-binding">
                    신규 및 주요 기능
								<i className="icon_triangle wrapmsgr_collapse" ng-className="{true: 'wrapmsgr_expand', false: 'wrapmsgr_collapse'}[intentGroup.active]"></i>
                </div>
                <ul className="question-sub-list ng-hide" ng-show="intentGroup.active">

                </ul>
            </li><li ng-className="{active: intentGroup.active}" ng-repeat="intentGroup in current.botIntentGroup" ng-init="intentGroup.active = false" className="ng-scope">
                <div ng-click="toggleIntentGroup(intentGroup)" className="ng-binding">
                    공지 사항
								<i className="icon_triangle wrapmsgr_collapse" ng-className="{true: 'wrapmsgr_expand', false: 'wrapmsgr_collapse'}[intentGroup.active]"></i>
                </div>
                <ul className="question-sub-list ng-hide" ng-show="intentGroup.active">

                </ul>
            </li>
        </ul></React.Fragment>
    );
}

export default QuestionList;