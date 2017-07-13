# responsive-react-tables
ReactJS component for Responsive Tables

Has a component for Responsive Tables and Grouped Responsive Tables

Based on https://codepen.io/nhackley/pen/QbGoLN
Which was based on https://techblog.livingsocial.com/blog/2015/04/06/responsive-tables-in-pure-css/

## Example
Import CSS through webpack or other
```javascript
import ResponsiveTable from './ResponsiveTable'
import GroupedResponsiveTable from './GroupedResponsiveTable'
export default class Results extends React.Component {
  render(){
    return(
      <div>
        <ResponsiveTable columns={props.columns} rows={summary_data}/>
        <GroupedResponsiveTable columns={props.columns} groups={summary_data} group_field="summarytype"/>
      </div>
    );
  }
}
Results.defaultProps = {
  columns: {
    grouping: "Grouping",
    mean_salary: "Mean Salary"
  },
  data: [
    {  
       "grouping":"1-24",
       "mean_salary":135051
    },
    {  
       "grouping":"250-499",
       "mean_salary":139345
    },
    {  
       "grouping":"100-249",
       "mean_salary":165312
    }
  ],
  grouped_data:{  
     "1":[  
        {  
           "grouping":"1-24",
           "mean_salary":135051,
           "summarytype":"Size"
        },
        {  
           "grouping":"250-499",
           "mean_salary":139345,
           "summarytype":"Size"
        },
        {  
           "grouping":"100-249",
           "mean_salary":165312,
           "summarytype":"Size"
        }
     ],
     "2":[  
        {  
           "grouping":"New England",
           "mean_salary":150500,
           "summarytype":"New England"
        },
        {  
           "grouping":"Southern New England (Connecticut (other than Metro New York City), Massachusetts, Rhode Island)",
           "mean_salary":150000,
           "summarytype":"New England"
        },
        {  
           "grouping":"Northern New England (Maine, New Hampshire,Vermont)",
           "mean_salary":151000,
           "summarytype":"New England"
        }
     ],
     "3":[  
        {  
           "grouping":"South Atlantic",
           "mean_salary":150204,
           "summarytype":"South Atlantic"
        },
        {  
           "grouping":"North Carolina, West Virginia",
           "mean_salary":126163,
           "summarytype":"South Atlantic"
        }
     ]
  }
}

```
