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
import ArcSessionLogEntry from './ArcSessionLogEntry';

/**
 * The ArcSession model module.
 * @module model/ArcSession
 * @version 17.0.0
 */
class ArcSession {
    /**
     * Constructs a new <code>ArcSession</code>.
     * A session log. Other than &#x60;firewall_enabled&#x60; (always present), &#x60;firewall_*&#x60; fields are only present when AI Firewall ran on a request in this session. They&#39;re absent (not merely empty) otherwise, so their absence and an empty value mean different things. 
     * @alias module:model/ArcSession
     * @param id {String} The unique identifier of the session.
     * @param virtual_key_id {String} The ID of the virtual key used for this session.
     * @param model {String} The AI model identifier used.
     * @param provider {String} The name of the provider connection that ultimately served the session.
     * @param provider_connection_id {String} The ID of the provider connection that ultimately served the session.
     * @param requests {Number} The number of requests made in this session.
     * @param input_tokens {Number} The total input tokens consumed in this session.
     * @param output_tokens {Number} The total output tokens generated in this session.
     * @param violations {Number} The number of AI Firewall violations detected in this session.
     * @param firewall_enabled {Boolean} Whether AI Firewall was enabled for this session's virtual key.
     * @param created_at {Date} The date and time the session was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the session was last updated, in RFC 3339 format.
     * @param logs {Array.<module:model/ArcSessionLogEntry>} The request and response pairs recorded for this session.
     */
    constructor(id, virtual_key_id, model, provider, provider_connection_id, requests, input_tokens, output_tokens, violations, firewall_enabled, created_at, updated_at, logs) { 
        
        ArcSession.initialize(this, id, virtual_key_id, model, provider, provider_connection_id, requests, input_tokens, output_tokens, violations, firewall_enabled, created_at, updated_at, logs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, virtual_key_id, model, provider, provider_connection_id, requests, input_tokens, output_tokens, violations, firewall_enabled, created_at, updated_at, logs) { 
        obj['id'] = id;
        obj['virtual_key_id'] = virtual_key_id;
        obj['model'] = model;
        obj['provider'] = provider;
        obj['provider_connection_id'] = provider_connection_id;
        obj['requests'] = requests;
        obj['input_tokens'] = input_tokens;
        obj['output_tokens'] = output_tokens;
        obj['violations'] = violations;
        obj['firewall_enabled'] = firewall_enabled;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
        obj['logs'] = logs;
    }

    /**
     * Constructs a <code>ArcSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcSession} obj Optional instance to populate.
     * @return {module:model/ArcSession} The populated <code>ArcSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcSession();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('virtual_key_id')) {
                obj['virtual_key_id'] = ApiClient.convertToType(data['virtual_key_id'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('provider_connection_id')) {
                obj['provider_connection_id'] = ApiClient.convertToType(data['provider_connection_id'], 'String');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('input_tokens')) {
                obj['input_tokens'] = ApiClient.convertToType(data['input_tokens'], 'Number');
            }
            if (data.hasOwnProperty('output_tokens')) {
                obj['output_tokens'] = ApiClient.convertToType(data['output_tokens'], 'Number');
            }
            if (data.hasOwnProperty('violations')) {
                obj['violations'] = ApiClient.convertToType(data['violations'], 'Number');
            }
            if (data.hasOwnProperty('firewall_enabled')) {
                obj['firewall_enabled'] = ApiClient.convertToType(data['firewall_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [ArcSessionLogEntry]);
            }
            if (data.hasOwnProperty('virtual_key_name')) {
                obj['virtual_key_name'] = ApiClient.convertToType(data['virtual_key_name'], 'String');
            }
            if (data.hasOwnProperty('primary_provider')) {
                obj['primary_provider'] = ApiClient.convertToType(data['primary_provider'], 'String');
            }
            if (data.hasOwnProperty('firewall_outcome')) {
                obj['firewall_outcome'] = ApiClient.convertToType(data['firewall_outcome'], 'String');
            }
            if (data.hasOwnProperty('firewall_stage')) {
                obj['firewall_stage'] = ApiClient.convertToType(data['firewall_stage'], 'String');
            }
            if (data.hasOwnProperty('firewall_policy')) {
                obj['firewall_policy'] = ApiClient.convertToType(data['firewall_policy'], 'String');
            }
            if (data.hasOwnProperty('firewall_incomplete_reason')) {
                obj['firewall_incomplete_reason'] = ApiClient.convertToType(data['firewall_incomplete_reason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the session.
 * @member {String} id
 */
ArcSession.prototype['id'] = undefined;

/**
 * The ID of the virtual key used for this session.
 * @member {String} virtual_key_id
 */
ArcSession.prototype['virtual_key_id'] = undefined;

/**
 * The AI model identifier used.
 * @member {String} model
 */
ArcSession.prototype['model'] = undefined;

/**
 * The name of the provider connection that ultimately served the session.
 * @member {String} provider
 */
ArcSession.prototype['provider'] = undefined;

/**
 * The ID of the provider connection that ultimately served the session.
 * @member {String} provider_connection_id
 */
ArcSession.prototype['provider_connection_id'] = undefined;

/**
 * The number of requests made in this session.
 * @member {Number} requests
 */
ArcSession.prototype['requests'] = undefined;

/**
 * The total input tokens consumed in this session.
 * @member {Number} input_tokens
 */
ArcSession.prototype['input_tokens'] = undefined;

/**
 * The total output tokens generated in this session.
 * @member {Number} output_tokens
 */
ArcSession.prototype['output_tokens'] = undefined;

/**
 * The number of AI Firewall violations detected in this session.
 * @member {Number} violations
 */
ArcSession.prototype['violations'] = undefined;

/**
 * Whether AI Firewall was enabled for this session's virtual key.
 * @member {Boolean} firewall_enabled
 */
ArcSession.prototype['firewall_enabled'] = undefined;

/**
 * The date and time the session was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcSession.prototype['created_at'] = undefined;

/**
 * The date and time the session was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcSession.prototype['updated_at'] = undefined;

/**
 * The request and response pairs recorded for this session.
 * @member {Array.<module:model/ArcSessionLogEntry>} logs
 */
ArcSession.prototype['logs'] = undefined;

/**
 * The display name of the virtual key used for this session.
 * @member {String} virtual_key_name
 */
ArcSession.prototype['virtual_key_name'] = undefined;

/**
 * The ID of the provider connection originally requested, before any failover occurred.
 * @member {String} primary_provider
 */
ArcSession.prototype['primary_provider'] = undefined;

/**
 * The outcome AI Firewall reached for this session. Present only when AI Firewall ran.
 * @member {String} firewall_outcome
 */
ArcSession.prototype['firewall_outcome'] = undefined;

/**
 * The AI Firewall stage that produced the outcome (for example, the request or response stage). Present only when AI Firewall ran.
 * @member {String} firewall_stage
 */
ArcSession.prototype['firewall_stage'] = undefined;

/**
 * The AI Firewall policy that was applied. Present only when AI Firewall ran.
 * @member {String} firewall_policy
 */
ArcSession.prototype['firewall_policy'] = undefined;

/**
 * Why AI Firewall inspection was incomplete, if applicable. Present only when AI Firewall ran and inspection didn't complete.
 * @member {String} firewall_incomplete_reason
 */
ArcSession.prototype['firewall_incomplete_reason'] = undefined;






export default ArcSession;

