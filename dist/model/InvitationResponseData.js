"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationData = _interopRequireDefault(require("./InvitationData"));

var _InvitationResponseDataAllOf = _interopRequireDefault(require("./InvitationResponseDataAllOf"));

var _RelationshipsForInvitation = _interopRequireDefault(require("./RelationshipsForInvitation"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeInvitation = _interopRequireDefault(require("./TypeInvitation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationResponseData model module.
 * @module model/InvitationResponseData
 * @version 3.0.0-alpha1
 */
var InvitationResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationResponseData</code>.
   * @alias module:model/InvitationResponseData
   * @implements module:model/InvitationData
   * @implements module:model/InvitationResponseDataAllOf
   */
  function InvitationResponseData() {
    _classCallCheck(this, InvitationResponseData);

    _InvitationData["default"].initialize(this);

    _InvitationResponseDataAllOf["default"].initialize(this);

    InvitationResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponseData} obj Optional instance to populate.
     * @return {module:model/InvitationResponseData} The populated <code>InvitationResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationResponseData();

        _InvitationData["default"].constructFromObject(data, obj);

        _InvitationResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeInvitation["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForInvitation["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvitationResponseData;
}();
/**
 * @member {module:model/TypeInvitation} type
 */


InvitationResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

InvitationResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForInvitation} relationships
 */

InvitationResponseData.prototype['relationships'] = undefined;
/**
 * Alphanumeric string identifying an invitation.
 * @member {String} id
 */

InvitationResponseData.prototype['id'] = undefined; // Implement InvitationData interface:

/**
 * @member {module:model/TypeInvitation} type
 */

_InvitationData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/InvitationDataAttributes} attributes
 */

_InvitationData["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipServiceInvitationsCreate} relationships
 */

_InvitationData["default"].prototype['relationships'] = undefined; // Implement InvitationResponseDataAllOf interface:

/**
 * Alphanumeric string identifying an invitation.
 * @member {String} id
 */

_InvitationResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_InvitationResponseDataAllOf["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForInvitation} relationships
 */

_InvitationResponseDataAllOf["default"].prototype['relationships'] = undefined;
var _default = InvitationResponseData;
exports["default"] = _default;