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
import PathChange from './PathChange';
import PathWithRules from './PathWithRules';

/**
 * The DraftDiff model module.
 * @module model/DraftDiff
 * @version 16.1.0
 */
class DraftDiff {
    /**
     * Constructs a new <code>DraftDiff</code>.
     * The differences between the draft and active versions of a routing config.
     * @alias module:model/DraftDiff
     */
    constructor() { 
        
        DraftDiff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DraftDiff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DraftDiff} obj Optional instance to populate.
     * @return {module:model/DraftDiff} The populated <code>DraftDiff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DraftDiff();

            if (data.hasOwnProperty('added')) {
                obj['added'] = ApiClient.convertToType(data['added'], [PathWithRules]);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], [PathWithRules]);
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], [PathChange]);
            }
        }
        return obj;
    }


}

/**
 * Paths that exist in the draft but not in the active version.
 * @member {Array.<module:model/PathWithRules>} added
 */
DraftDiff.prototype['added'] = undefined;

/**
 * Paths that exist in the active version but not in the draft.
 * @member {Array.<module:model/PathWithRules>} deleted
 */
DraftDiff.prototype['deleted'] = undefined;

/**
 * Paths that exist in both versions but have changed.
 * @member {Array.<module:model/PathChange>} modified
 */
DraftDiff.prototype['modified'] = undefined;






export default DraftDiff;

