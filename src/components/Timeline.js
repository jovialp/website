import React, { Component } from "react";

class Timeline extends Component {
    render() {
        const { datas } = this.props;
        return (
            datas.length > 0 && datas.map(data => {
                return (
                    <div key={data.id}>
                        <div className="row" >
                            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                                {data.date && (<label htmlFor="date">{data.date}</label>)}
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                                {data.position && (<label htmlFor="position">{data.position}</label>)}
                                {data.title && (<h3>{data.title}</h3>)}
                                {data.description && (<label htmlFor="description">{data.description}</label>)}
                                {data.works && data.works.length > 0 && (
                                    <ul>
                                        {data.works.map(work => {
                                            return <li key={work}>{work}</li>
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <br />
                    </div>
                );
            })
        );
    }
}
export default Timeline;
