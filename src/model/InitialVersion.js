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
import InitialVersionPath from './InitialVersionPath';

/**
 * The InitialVersion model module.
 * @module model/InitialVersion
 * @version 16.1.0
 */
class InitialVersion {
    /**
     * Constructs a new <code>InitialVersion</code>.
     * Optional initial version payload to seed the new routing config with paths and rules in a single request.
     * @alias module:model/InitialVersion
     */
    constructor() { 
        
        InitialVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InitialVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InitialVersion} obj Optional instance to populate.
     * @return {module:model/InitialVersion} The populated <code>InitialVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InitialVersion();

            if (data.hasOwnProperty('activate')) {
                obj['activate'] = ApiClient.convertToType(data['activate'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], [InitialVersionPath]);
            }
        }
        return obj;
    }


}

/**
 * Whether to activate the initial version on creation.
 * @member {Boolean} activate
 * @default false
 */
InitialVersion.prototype['activate'] = false;

/**
 * A freeform comment for the initial version.
 * @member {String} comment
 */
InitialVersion.prototype['comment'] = undefined;

/**
 * The paths to create on the initial version.
 * @member {Array.<module:model/InitialVersionPath>} paths
 */
InitialVersion.prototype['paths'] = undefined;






export default InitialVersion;

