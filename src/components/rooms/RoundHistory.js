import React, { Component } from 'react';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

class RoundHistory extends Component {

    constructor(props) {
        super(props);
    }

    printDocument() {

        var doc = new jsPDF('p');
        var res = doc.autoTableHtmlToJson(document.getElementById("roundHistoryTable"));

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        var header = function(data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.setFontStyle('normal');
            doc.text("Planning Poker - " + today, data.settings.margin.left, 50);
        };

        var options = {
            beforePageContent: header,
            margin:10,
            startY: doc.autoTableEndPosY() + 70
        };

        doc.autoTable(res.columns, res.data, options);

        doc.save("Planning Poker.pdf");
    }

    render() {
        const {roundsHistory} = this.props;
        return (
            <div className="card white round-history-card">
                <div className="card-content">
                    <span className="card-title">
                        Round History 
                        <i title="Download Results" className="material-icons right cursor-pointer" onClick={this.printDocument}>cloud_download</i>
                    </span>
                    
                    <table className="striped" id="roundHistoryTable">
                        <thead>
                            <tr>
                                <th>Story Name</th>
                                <th>Average Score</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            roundsHistory && roundsHistory.map(round => {
                                return (
                                    <tr key={ round.storyId }>
                                        <td>{ round.storyName }</td>
                                        <td>{ round.score }</td>
                                        <td>{ round.duration }</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default RoundHistory;