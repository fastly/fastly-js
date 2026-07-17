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
 * The PolicyCreate model module.
 * @module model/PolicyCreate
 * @version 16.0.0
 */
class PolicyCreate {
    /**
     * Constructs a new <code>PolicyCreate</code>.
     * @alias module:model/PolicyCreate
     * @param name {String} 
     * @param mode {module:model/PolicyCreate.ModeEnum} 
     */
    constructor(name, mode) { 
        
        PolicyCreate.initialize(this, name, mode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, mode) { 
        obj['name'] = name;
        obj['mode'] = mode;
    }

    /**
     * Constructs a <code>PolicyCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyCreate} obj Optional instance to populate.
     * @return {module:model/PolicyCreate} The populated <code>PolicyCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
PolicyCreate.prototype['name'] = undefined;

/**
 * @member {module:model/PolicyCreate.ModeEnum} mode
 */
PolicyCreate.prototype['mode'] = undefined;

/**
 * @member {String} description
 */
PolicyCreate.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Directive>} directives
 */
PolicyCreate.prototype['directives'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
PolicyCreate['ModeEnum'] = {

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



export default PolicyCreate;

