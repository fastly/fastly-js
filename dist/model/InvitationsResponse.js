"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationResponseData = _interopRequireDefault(require("./InvitationResponseData"));

var _InvitationsResponseAllOf = _interopRequireDefault(require("./InvitationsResponseAllOf"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationsResponse model module.
 * @module model/InvitationsResponse
 * @version 3.0.0-alpha1
 */
var InvitationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationsResponse</code>.
   * @alias module:model/InvitationsResponse
   * @implements module:model/Pagination
   * @implements module:model/InvitationsResponseAllOf
   */
  function InvitationsResponse() {
    _classCallCheck(this, InvitationsResponse);

    _Pagination["default"].initialize(this);

    _InvitationsResponseAllOf["default"].initialize(this);

    InvitationsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationsResponse} obj Optional instance to populate.
     * @return {module:model/InvitationsResponse} The populated <code>InvitationsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _InvitationsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InvitationResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InvitationsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


InvitationsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

InvitationsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/InvitationResponseData>} data
 */

InvitationsResponse.prototype['data'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement InvitationsResponseAllOf interface:

/**
 * @member {Array.<module:model/InvitationResponseData>} data
 */

_InvitationsResponseAllOf["default"].prototype['data'] = undefined;
var _default = InvitationsResponse;
exports["default"] = _default;