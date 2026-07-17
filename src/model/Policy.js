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
import Directive from './Directive';

/**
 * The Policy model module.
 * @module model/Policy
 * @version 16.0.0
 */
class Policy {
    /**
     * Constructs a new <code>Policy</code>.
     * @alias module:model/Policy
     */
    constructor() { 
        
        Policy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Policy} obj Optional instance to populate.
     * @return {module:model/Policy} The populated <code>Policy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Policy();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('page_id')) {
                obj['page_id'] = ApiClient.convertToType(data['page_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('directives')) {
                obj['directives'] = ApiClient.convertToType(data['directives'], [Directive]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Policy.prototype['id'] = undefined;

/**
 * @member {String} page_id
 */
Policy.prototype['page_id'] = undefined;

/**
 * @member {String} name
 */
Policy.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Policy.prototype['description'] = undefined;

/**
 * @member {module:model/Policy.ModeEnum} mode
 */
Policy.prototype['mode'] = undefined;

/**
 * @member {Array.<module:model/Directive>} directives
 */
Policy.prototype['directives'] = undefined;

/**
 * @member {Date} created_at
 */
Policy.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Policy.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
Policy['ModeEnum'] = {

    /**
     * value: "report"
     * @const
     */
    "report": "report",

    /**
     * value: "enforce"
     * @const
     */
    "enforce": "enforce"
};



export default Policy;

