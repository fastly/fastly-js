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
 * The PolicyUpdate model module.
 * @module model/PolicyUpdate
 * @version 16.0.0
 */
class PolicyUpdate {
    /**
     * Constructs a new <code>PolicyUpdate</code>.
     * @alias module:model/PolicyUpdate
     */
    constructor() { 
        
        PolicyUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PolicyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyUpdate} obj Optional instance to populate.
     * @return {module:model/PolicyUpdate} The populated <code>PolicyUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyUpdate();

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
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PolicyUpdate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PolicyUpdate.prototype['description'] = undefined;

/**
 * @member {module:model/PolicyUpdate.ModeEnum} mode
 */
PolicyUpdate.prototype['mode'] = undefined;

/**
 * @member {Array.<module:model/Directive>} directives
 */
PolicyUpdate.prototype['directives'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
PolicyUpdate['ModeEnum'] = {

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



export default PolicyUpdate;

