/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ValueField from './ValueField';

/**
 * The FilterFieldItem model module.
 * @module model/FilterFieldItem
 * @version 14.1.0
 */
class FilterFieldItem {
    /**
     * Constructs a new <code>FilterFieldItem</code>.
     * A filtering parameter.
     * @alias module:model/FilterFieldItem
     */
    constructor() { 
        
        FilterFieldItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterFieldItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterFieldItem} obj Optional instance to populate.
     * @return {module:model/FilterFieldItem} The populated <code>FilterFieldItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterFieldItem();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ValueField.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * The log field to which this filter should be applied.
 * @member {String} field
 */
FilterFieldItem.prototype['field'] = undefined;

/**
 * The comparison operator used for this filter.
 * @member {module:model/FilterFieldItem.OperatorEnum} operator
 */
FilterFieldItem.prototype['operator'] = undefined;

/**
 * @member {module:model/ValueField} value
 */
FilterFieldItem.prototype['value'] = undefined;





/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
FilterFieldItem['OperatorEnum'] = {

    /**
     * value: "eq"
     * @const
     */
    "eq": "eq",

    /**
     * value: "ends-with"
     * @const
     */
    "ends-with": "ends-with",

    /**
     * value: "in"
     * @const
     */
    "in": "in",

    /**
     * value: "not_in"
     * @const
     */
    "not_in": "not_in",

    /**
     * value: "gt"
     * @const
     */
    "gt": "gt",

    /**
     * value: "gte"
     * @const
     */
    "gte": "gte",

    /**
     * value: "lt"
     * @const
     */
    "lt": "lt",

    /**
     * value: "lte"
     * @const
     */
    "lte": "lte"
};



export default FilterFieldItem;

